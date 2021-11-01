import Prismic from '@prismicio/client'

export function getPrismicClient( req?:unknown  ){
        const prismic=Prismic.client(
            process.env.PRISMIC_ENDPOINT as string,
            {
                req ,
                accessToken:process.env.PRISMIC_ACCESS_TOKEN
            }
        )
        return prismic
}

'MC5ZWHlUUVJFQUFDZ0FadG5V.Mu-_vUbvv71iIRRe77-977-9bO-_ve-_vXnvv73vv73vv73vv71r77-9I--_vXElOe-_ve-_vRzvv73vv71877-9'