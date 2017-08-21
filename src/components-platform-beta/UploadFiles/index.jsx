// import AWS from 'aws-sdk';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import theme from './style.css';

const getName = name => name.substring(name.lastIndexOf('/') + 1);

const s3Token = () => (
  axios.get(`${process.env.API_CONFIG.AUTH}/aws/sessiontoken`)
    .then(res => res.data)
    .then(config => (
      // eslint-disable-next-line
      new AWS.S3({
        credentials: config,
        apiVersion: '2006-03-01',
        region: 'sa-east-1',
        params: { Bucket: '08102a0b-d4f8-42a2-8b0e-2052d05577d7' },
      })))
);

class UploadFiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bucketName: '',
      docs: [],
      file: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onChangeFiles = this.onChangeFiles.bind(this);
  }

  componentDidMount() {
    this.listFiles();
  }

  onChangeFiles(e) {
    s3Token()
    .then((s3) => {
      this.upload(e, s3);
    });
  }

  onClick(e) {
    this.inputFileEl.click();
    e.preventDefault();
  }

  listFiles() {
    const { docs } = this.state;
    s3Token()
      .then((s3) => {
        s3.listObjects({
          Prefix: `${this.props.s3Folder}/${this.props.id}/doc_`,
          Bucket: s3.config.params.Bucket,
        }, (err, data) => {
          data.Contents.map((item) => {
            const params = {
              Bucket: data.bucketName,
              Key: item.Key,
            };

            return docs.push({
              href: s3.getSignedUrl('getObject', params),
              key: params.Key,
              name: getName(params.Key),
            });
          });

          this.setState({ bucketName: data.Name });
        });
      });
  }

  upload(e, s3) {
    const files = this.inputFileEl.files;
    const file = files[0];
    const fileName = file.name;
    const baseDir = this.props.s3Folder;
    const dir = `${baseDir}/${this.props.id}`;
    const uri = `${dir}/doc_${fileName}`;

    const conf = {
      Key: uri,
      Body: file,
      ContentType: file.type,
      ServerSideEncryption: 'AES256',
    };

    s3.upload(conf, (err, data) => {
      if (!err) {
        this.setState({
          docs: [],
          file: true,
        });
        this.props.uploadSuccess(getName(data.Key), data.Key);
        this.listFiles();
        // alert('Arquivo enviado com sucesso');
      } else {
        // alert('Falha ao enviar arquivo');
      }
    });
  }

  render() {
    return (
      <div className={theme.files}>
        <ul>
          { this.state.docs.length > 0 &&
            this.state.docs.map(item => (
              <li key={item.key}>
                <a href={item.href} alt="" target="blank">
                  <i className={`material-icons ${theme.fileIcon}`}>insert_drive_file</i>
                  <div className={theme.desc}>
                    <p>{item.name}</p>
                  </div>
                </a>
              </li>
            ))
          }
        </ul>

        { !this.state.file &&
          <div>
            <a
              className={theme.buttonAdd}
              href="/"
              onClick={this.onClick}
            >
              <i className={`material-icons ${theme.fileIcon}`}>cloud_upload</i>
              <div className={theme.desc}>
                <p>Adicionar</p>
              </div>
            </a>
            <input
              ref={e => (this.inputFileEl = e)}
              onChange={this.onChangeFiles}
              type="file" accept="image/*" className={theme.choose}
            />
          </div>}
      </div>
    );
  }
}

UploadFiles.propTypes = {
  id: PropTypes.string.isRequired,
  s3Folder: PropTypes.string.isRequired,
  uploadSuccess: PropTypes.func.isRequired,
};

export default UploadFiles;
