import { shallow } from 'enzyme'
import React from 'react'
import Input from './input'

describe('<Input />', () => {
	let component

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
				onFocus={(e) => {}}
			/>
		)
	})

	it('should render without crashing', () => {
		shallow(component)
	})

	it('should render with icon city', () => {
		const wrapper = shallow(component)
		expect(wrapper.find('.zmdi-city-alt')).toHaveLength(1)
	})

	it('should return false when pass not an email', () => {
		const wrapper = shallow(component)
		const bool = wrapper.instance().isAValidEmail('Sérgio')
		expect(bool).toBeFalsy()
	})

	it('should return true when pass an email', () => {
		const wrapper = shallow(component)
		const bool = wrapper.instance().isAValidEmail('email@teste.com')
		expect(bool).toBeTruthy()
	})

	it('should set maxlength state to 1    ', () => {
		const wrapper = shallow(component)
		wrapper.setState({ maxLength: 1 })
		expect(wrapper.state('maxLength')).toEqual(1)
	})
})
