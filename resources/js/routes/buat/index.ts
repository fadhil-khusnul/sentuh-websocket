import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
export const media = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: media.url(options),
    method: 'get',
})

media.definition = {
    methods: ["get","head"],
    url: '/buat-media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
media.url = (options?: RouteQueryOptions) => {
    return media.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
media.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: media.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
media.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: media.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
    const mediaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: media.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
        mediaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: media.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
        mediaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: media.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    media.form = mediaForm
const buat = {
    media: Object.assign(media, media),
}

export default buat