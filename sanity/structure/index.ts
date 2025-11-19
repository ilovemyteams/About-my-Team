import {pageStructure} from '../plugins/settings'
import {homeType} from '../schemaTypes/singletons/homeType'
import {settingsType} from '../schemaTypes/singletons/settingsType'

export const singletonPagesType = [homeType.name, settingsType.name]
export const structure = pageStructure([homeType, settingsType])
