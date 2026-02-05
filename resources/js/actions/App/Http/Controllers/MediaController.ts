import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/'
 */
const halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/'
 */
halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/'
 */
halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/'
 */
halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/'
 */
    const halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/'
 */
        halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/'
 */
        halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9.form = halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9Form
    /**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
const halaman_cmsf009503cf1cfca665fdc85da720d4171 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: halaman_cmsf009503cf1cfca665fdc85da720d4171.url(options),
    method: 'get',
})

halaman_cmsf009503cf1cfca665fdc85da720d4171.definition = {
    methods: ["get","head"],
    url: '/halaman-cms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
halaman_cmsf009503cf1cfca665fdc85da720d4171.url = (options?: RouteQueryOptions) => {
    return halaman_cmsf009503cf1cfca665fdc85da720d4171.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
halaman_cmsf009503cf1cfca665fdc85da720d4171.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: halaman_cmsf009503cf1cfca665fdc85da720d4171.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
halaman_cmsf009503cf1cfca665fdc85da720d4171.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: halaman_cmsf009503cf1cfca665fdc85da720d4171.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
    const halaman_cmsf009503cf1cfca665fdc85da720d4171Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: halaman_cmsf009503cf1cfca665fdc85da720d4171.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
        halaman_cmsf009503cf1cfca665fdc85da720d4171Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: halaman_cmsf009503cf1cfca665fdc85da720d4171.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::halaman_cms
 * @see app/Http/Controllers/MediaController.php:14
 * @route '/halaman-cms'
 */
        halaman_cmsf009503cf1cfca665fdc85da720d4171Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: halaman_cmsf009503cf1cfca665fdc85da720d4171.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    halaman_cmsf009503cf1cfca665fdc85da720d4171.form = halaman_cmsf009503cf1cfca665fdc85da720d4171Form

export const halaman_cms = {
    '/': halaman_cms980bb49ee7ae63891f1d891d2fbcf1c9,
    '/halaman-cms': halaman_cmsf009503cf1cfca665fdc85da720d4171,
}

/**
* @see \App\Http\Controllers\MediaController::upload
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/upload-media',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::upload
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::upload
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::upload
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
    const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: upload.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::upload
 * @see app/Http/Controllers/MediaController.php:29
 * @route '/upload-media'
 */
        uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload.url(options),
            method: 'post',
        })
    
    upload.form = uploadForm
/**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
export const play = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: play.url(args, options),
    method: 'post',
})

play.definition = {
    methods: ["post"],
    url: '/media/{id}/play',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
play.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return play.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
play.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: play.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
    const playForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: play.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:52
 * @route '/media/{id}/play'
 */
        playForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: play.url(args, options),
            method: 'post',
        })
    
    play.form = playForm
/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/media/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
    const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:79
 * @route '/media/{id}'
 */
        updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/media/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
    const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:64
 * @route '/media/{id}'
 */
        destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
export const ds_player = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ds_player.url(options),
    method: 'get',
})

ds_player.definition = {
    methods: ["get","head"],
    url: '/ds-player',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
ds_player.url = (options?: RouteQueryOptions) => {
    return ds_player.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
ds_player.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ds_player.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
ds_player.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ds_player.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
    const ds_playerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ds_player.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
        ds_playerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ds_player.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:90
 * @route '/ds-player'
 */
        ds_playerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ds_player.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ds_player.form = ds_playerForm
/**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
export const get_playlist = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: get_playlist.url(options),
    method: 'get',
})

get_playlist.definition = {
    methods: ["get","head"],
    url: '/get-playlist',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
get_playlist.url = (options?: RouteQueryOptions) => {
    return get_playlist.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
get_playlist.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: get_playlist.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
get_playlist.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: get_playlist.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
    const get_playlistForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: get_playlist.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
        get_playlistForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: get_playlist.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:95
 * @route '/get-playlist'
 */
        get_playlistForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: get_playlist.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    get_playlist.form = get_playlistForm
const MediaController = { halaman_cms, upload, play, update, destroy, ds_player, get_playlist }

export default MediaController