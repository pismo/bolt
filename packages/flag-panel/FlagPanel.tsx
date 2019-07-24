import * as React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SvgIcon from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'

enum FLAG {
  ad,
  ae,
  af,
  ag,
  ai,
  al,
  am,
  an,
  ao,
  aq,
  ar,
  as,
  at,
  au,
  aw,
  ax,
  az,
  ba,
  bb,
  bd,
  be,
  bf,
  bg,
  bh,
  bi,
  bj,
  bl,
  bm,
  bn,
  bo,
  bq,
  br,
  bs,
  bt,
  bv,
  bw,
  by,
  bz,
  ca,
  cc,
  cd,
  cf,
  cg,
  ch,
  ci,
  ck,
  cl,
  cm,
  cn,
  co,
  cr,
  cu,
  cv,
  vw,
  cx,
  cy,
  cz,
  de,
  dj,
  dk,
  dm,
  do,
  dz,
  ec,
  ee,
  eg,
  eh,
  er,
  es,
  et,
  eu,
  fl,
  fj,
  fk,
  fm,
  fo,
  fr,
  ga,
  gb,
  gd,
  ge,
  gf,
  gg,
  gh,
  gi,
  gl,
  gm,
  gn,
  gp,
  gq,
  gr,
  gs,
  gt,
  gu,
  gw,
  gy,
  hk,
  hm,
  hn,
  hr,
  ht,
  hu,
  ic,
  id,
  ie,
  il,
  im,
  in,
  io,
  iq,
  ir,
  is,
  it,
  je,
  jm,
  jo,
  jp,
  ke,
  kg,
  kh,
  kl,
  km,
  kn,
  kp,
  kr,
  kw,
  ky,
  kz,
  la,
  lb,
  lc,
  li,
  lk,
  lr,
  ls,
  lt,
  lu,
  lv,
  ly,
  ma,
  mc,
  md,
  me,
  mf,
  mg,
  mh,
  mk,
  ml,
  mm,
  mn,
  mo,
  mp,
  mq,
  mr,
  ms,
  mt,
  mu,
  mv,
  mw,
  mx,
  my,
  mz,
  na,
  nc,
  ce,
  nf,
  ng,
  ni,
  nl,
  no,
  np,
  nr,
  nu,
  nz,
  om,
  pa,
  pe,
  pf,
  pg,
  ph,
  pk,
  pl,
  pm,
  pn,
  pr,
  ps,
  pt,
  pw,
  py,
  qa,
  re,
  ro,
  rs,
  ru,
  rw,
  sa,
  sb,
  sc,
  sd,
  se,
  sg,
  sh,
  si,
  sj,
  ss,
  st,
  sv,
  sx,
  sy,
  sz,
  tc,
  td,
  tf,
  tg,
  th,
  tj,
  tk,
  tl,
  tm,
  tn,
  to,
  tr,
  tt,
  tv,
  tw,
  tz,
  ua,
  ug,
  um,
  us,
  uy,
  uz,
  va,
  vc,
  ve,
  vg,
  vi,
  vn,
  vu,
  wf,
  ws,
  xk,
  ye,
  yt,
  za,
  zm,
  zw
}

interface Data {
  flag: FLAG
  description: string
}

interface FlagPanelProps {
  title: string
  data: Data[]
  size?: 16 | 24 | 32 | 48 | 64
  type?: 'flat' | 'shiny'
}

const FlagPanel: React.FC<FlagPanelProps> = ({
  title,
  data,
  size = 32,
  type = 'shiny'
}: FlagPanelProps) => {
  return (
    <ExpansionPanel className='FlagPanel' square={true}>
      <ExpansionPanelSummary
        className='FlagPanel-summary'
        expandIcon={<ExpandMoreIcon className='FlagPanel-expandMoreIcon' />}
      >
        <Grid container spacing={2}>
          <Grid item>
            <SvgIcon
              color='primary'
              component={props => (
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='far'
                  data-icon='globe-americas'
                  class='svg-inline--fa fa-globe-americas fa-w-16'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  {...props}
                  viewBox='0 0 496 512'
                >
                  <path
                    fill='currentColor'
                    d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-32 50.8v11.3c0 11.9-12.5 19.6-23.2 14.3l-24-12c14.9-6.4 30.7-10.9 47.2-13.6zm32 369.8V456c-110.3 0-200-89.7-200-200 0-29.1 6.4-56.7 17.6-81.7 9.9 14.7 25.2 37.4 34.6 51.1 5.2 7.6 11.2 14.6 18.1 20.7l.8.7c9.5 8.6 20.2 16 31.6 21.8 14 7 34.4 18.2 48.8 26.1 10.2 5.6 16.5 16.3 16.5 28v32c0 8.5 3.4 16.6 9.4 22.6 15 15.1 24.3 38.7 22.6 51.3zm42.7 22.7l17.4-46.9c2-5.5 3.3-11.2 4.8-16.9 1.1-4 3.2-7.7 6.2-10.7l11.3-11.3c8.8-8.7 13.7-20.6 13.7-33 0-8.1-3.2-15.9-8.9-21.6l-13.7-13.7c-6-6-14.1-9.4-22.6-9.4H232c-9.4-4.7-21.5-32-32-32s-20.9-2.5-30.3-7.2l-11.1-5.5c-4-2-6.6-6.2-6.6-10.7 0-5.1 3.3-9.7 8.2-11.3l31.2-10.4c5.4-1.8 11.3-.6 15.5 3.1l9.3 8.1c1.5 1.3 3.3 2 5.2 2h5.6c6 0 9.8-6.3 7.2-11.6l-15.6-31.2c-1.6-3.1-.9-6.9 1.6-9.3l9.9-9.6c1.5-1.5 3.5-2.3 5.6-2.3h9c2.1 0 4.2-.8 5.7-2.3l8-8c3.1-3.1 3.1-8.2 0-11.3l-4.7-4.7c-3.1-3.1-3.1-8.2 0-11.3L264 112l4.7-4.7c6.2-6.2 6.2-16.4 0-22.6l-28.3-28.3c2.5-.1 5-.4 7.6-.4 78.2 0 145.8 45.2 178.7 110.7l-13 6.5c-3.7 1.9-6.9 4.7-9.2 8.1l-19.6 29.4c-5.4 8.1-5.4 18.6 0 26.6l18 27c3.3 5 8.4 8.5 14.1 10l29.2 7.3c-10.8 84-73.9 151.9-155.5 169.7z'
                  />
                </svg>
              )}
            />
          </Grid>
          <Grid item>
            <Typography>{title}</Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {data.map(item => (
          <MenuItem className='FlagPanel-menuItem' key={item.flag}>
            <Grid container spacing={2} alignItems='center'>
              <Grid item>
                <Box display='flex' alignItems='center'>
                  <img
                    src={`https://www.countryflags.io/${
                      item.flag
                    }/${type}/${size}.png`}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Typography>{item.description}</Typography>
              </Grid>
            </Grid>
          </MenuItem>
        ))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export { FlagPanel }
