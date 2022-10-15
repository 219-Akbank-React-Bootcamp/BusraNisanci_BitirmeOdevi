import service from '../../instance'
import { CardRequestPayload } from './types'


export const card = (payload: CardRequestPayload) => service.post('card', payload)

export const getCardAll = () => service.get('card')
