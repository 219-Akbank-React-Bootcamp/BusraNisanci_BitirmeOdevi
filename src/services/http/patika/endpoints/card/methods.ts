import service from '../../instance'
import { CardRequestPayload } from './types'


export const card = (payload: CardRequestPayload) => service.post('board', payload)

export const getCardAll = () => service.get('card')
