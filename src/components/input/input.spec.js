import { shallow } from 'enzyme'
import React from 'react'
import Input from './input'

describe('<Input />', () => {
    let component;

    beforeAll(() => {
        component = (
            <Input
                label="Cidade"
                placeholder="Cidade"
                icon="city-alt"
                id="user_city"
                required
                minLength={3}
                maxLength={5}
                type="text"
                hintText="Dica para o input"
                successText="Texto de sucesso"
                disabled={false}
                onChange={(e) => {}}
                onBlur={(e) => {}}
                onClick={(e) => {}}
                onKeyPress={(e) => {}}
                onFocus={(e) => {}}  />
        )
    })

    it('should render without crashing', () => {
        shallow(component );
    })

    it('should render with icon city', () => {
        const wrapper = shallow(component );
        expect(wrapper.find('.zmdi-city-alt')).toHaveLength(1);
    });

    // it('shoud call onBlur event' , () => {
    //     const wrapper = shallow(component );
    //     const value = '2';
    //     const handleChange = jest.fn();
    //     const element = wrapper.find('.input');
    //     element.simulate('change');
    //     expect(handleChange).toBeCalledOnce();
    // })
})
