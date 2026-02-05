import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
export const playlist = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: playlist.url(options),
    method: 'get',
})

playlist.definition = {
    methods: ["get","head"],
    url: '/get-playlist',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
playlist.url = (options?: RouteQueryOptions) => {
    return playlist.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
playlist.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: playlist.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
playlist.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: playlist.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
    const playlistForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: playlist.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
        playlistForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: playlist.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
        playlistForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: playlist.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    playlist.form = playlistForm
const get = {
    playlist: Object.assign(playlist, playlist),
}

export default get