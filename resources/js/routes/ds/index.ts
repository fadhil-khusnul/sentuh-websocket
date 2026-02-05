import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
export const player = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: player.url(options),
    method: 'get',
})

player.definition = {
    methods: ["get","head"],
    url: '/ds-player',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
player.url = (options?: RouteQueryOptions) => {
    return player.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
player.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: player.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
player.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: player.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
    const playerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: player.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
        playerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: player.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
        playerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: player.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    player.form = playerForm
const ds = {
    player: Object.assign(player, player),
}

export default ds