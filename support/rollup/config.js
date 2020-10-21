import factory from './factory'
import slate from '../../package.json'

const configurations = [...factory(slate)]

export default configurations
