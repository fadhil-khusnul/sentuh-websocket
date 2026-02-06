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
* @see \App\Http\Controllers\MediaController::buat_media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
export const buat_media = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: buat_media.url(options),
    method: 'get',
})

buat_media.definition = {
    methods: ["get","head"],
    url: '/buat-media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::buat_media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
buat_media.url = (options?: RouteQueryOptions) => {
    return buat_media.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::buat_media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
buat_media.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: buat_media.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::buat_media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
buat_media.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: buat_media.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::buat_media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
    const buat_mediaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: buat_media.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::buat_media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
        buat_mediaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: buat_media.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::buat_media
 * @see app/Http/Controllers/MediaController.php:32
 * @route '/buat-media'
 */
        buat_mediaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: buat_media.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    buat_media.form = buat_mediaForm
/**
* @see \App\Http\Controllers\MediaController::upload
 * @see app/Http/Controllers/MediaController.php:37
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
 * @see app/Http/Controllers/MediaController.php:37
 * @route '/upload-media'
 */
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::upload
 * @see app/Http/Controllers/MediaController.php:37
 * @route '/upload-media'
 */
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::upload
 * @see app/Http/Controllers/MediaController.php:37
 * @route '/upload-media'
 */
    const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: upload.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::upload
 * @see app/Http/Controllers/MediaController.php:37
 * @route '/upload-media'
 */
        uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload.url(options),
            method: 'post',
        })
    
    upload.form = uploadForm
/**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:162
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
 * @see app/Http/Controllers/MediaController.php:162
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
 * @see app/Http/Controllers/MediaController.php:162
 * @route '/media/{id}/play'
 */
play.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: play.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:162
 * @route '/media/{id}/play'
 */
    const playForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: play.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::play
 * @see app/Http/Controllers/MediaController.php:162
 * @route '/media/{id}/play'
 */
        playForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: play.url(args, options),
            method: 'post',
        })
    
    play.form = playForm
/**
* @see \App\Http\Controllers\MediaController::edit_media
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
export const edit_media = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit_media.url(args, options),
    method: 'get',
})

edit_media.definition = {
    methods: ["get","head"],
    url: '/media/{id}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::edit_media
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
edit_media.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit_media.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::edit_media
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
edit_media.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit_media.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::edit_media
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
edit_media.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit_media.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::edit_media
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
    const edit_mediaForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit_media.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::edit_media
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
        edit_mediaForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit_media.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::edit_media
 * @see app/Http/Controllers/MediaController.php:75
 * @route '/media/{id}/edit'
 */
        edit_mediaForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit_media.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit_media.form = edit_mediaForm
/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
const updated67ff0a3e156f39c73b0217f4513cc2a = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updated67ff0a3e156f39c73b0217f4513cc2a.url(args, options),
    method: 'post',
})

updated67ff0a3e156f39c73b0217f4513cc2a.definition = {
    methods: ["post"],
    url: '/media/{id}/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
updated67ff0a3e156f39c73b0217f4513cc2a.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updated67ff0a3e156f39c73b0217f4513cc2a.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
updated67ff0a3e156f39c73b0217f4513cc2a.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updated67ff0a3e156f39c73b0217f4513cc2a.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
    const updated67ff0a3e156f39c73b0217f4513cc2aForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updated67ff0a3e156f39c73b0217f4513cc2a.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}/update'
 */
        updated67ff0a3e156f39c73b0217f4513cc2aForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updated67ff0a3e156f39c73b0217f4513cc2a.url(args, options),
            method: 'post',
        })
    
    updated67ff0a3e156f39c73b0217f4513cc2a.form = updated67ff0a3e156f39c73b0217f4513cc2aForm
    /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}'
 */
const updatef0929511b16ed1dce5620b8503647eed = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef0929511b16ed1dce5620b8503647eed.url(args, options),
    method: 'put',
})

updatef0929511b16ed1dce5620b8503647eed.definition = {
    methods: ["put"],
    url: '/media/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}'
 */
updatef0929511b16ed1dce5620b8503647eed.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatef0929511b16ed1dce5620b8503647eed.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}'
 */
updatef0929511b16ed1dce5620b8503647eed.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef0929511b16ed1dce5620b8503647eed.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}'
 */
    const updatef0929511b16ed1dce5620b8503647eedForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatef0929511b16ed1dce5620b8503647eed.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::update
 * @see app/Http/Controllers/MediaController.php:99
 * @route '/media/{id}'
 */
        updatef0929511b16ed1dce5620b8503647eedForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef0929511b16ed1dce5620b8503647eed.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatef0929511b16ed1dce5620b8503647eed.form = updatef0929511b16ed1dce5620b8503647eedForm

export const update = {
    '/media/{id}/update': updated67ff0a3e156f39c73b0217f4513cc2a,
    '/media/{id}': updatef0929511b16ed1dce5620b8503647eed,
}

/**
* @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:206
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
 * @see app/Http/Controllers/MediaController.php:206
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
 * @see app/Http/Controllers/MediaController.php:206
 * @route '/media/{id}'
 */
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:206
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
 * @see app/Http/Controllers/MediaController.php:206
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
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
export const reject = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/media/reject/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
reject.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return reject.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
reject.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
    const rejectForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::reject
 * @see app/Http/Controllers/MediaController.php:196
 * @route '/media/reject/{id}'
 */
        rejectForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
/**
* @see \App\Http\Controllers\MediaController::approve_and_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
export const approve_and_play = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve_and_play.url(args, options),
    method: 'post',
})

approve_and_play.definition = {
    methods: ["post"],
    url: '/media/approve-play/{id}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::approve_and_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
approve_and_play.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return approve_and_play.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::approve_and_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
approve_and_play.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve_and_play.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MediaController::approve_and_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
    const approve_and_playForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve_and_play.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MediaController::approve_and_play
 * @see app/Http/Controllers/MediaController.php:175
 * @route '/media/approve-play/{id}'
 */
        approve_and_playForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve_and_play.url(args, options),
            method: 'post',
        })
    
    approve_and_play.form = approve_and_playForm
/**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:228
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
 * @see app/Http/Controllers/MediaController.php:228
 * @route '/ds-player'
 */
ds_player.url = (options?: RouteQueryOptions) => {
    return ds_player.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:228
 * @route '/ds-player'
 */
ds_player.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ds_player.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:228
 * @route '/ds-player'
 */
ds_player.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ds_player.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:228
 * @route '/ds-player'
 */
    const ds_playerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ds_player.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:228
 * @route '/ds-player'
 */
        ds_playerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ds_player.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::ds_player
 * @see app/Http/Controllers/MediaController.php:228
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
 * @see app/Http/Controllers/MediaController.php:233
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
 * @see app/Http/Controllers/MediaController.php:233
 * @route '/get-playlist'
 */
get_playlist.url = (options?: RouteQueryOptions) => {
    return get_playlist.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:233
 * @route '/get-playlist'
 */
get_playlist.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: get_playlist.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:233
 * @route '/get-playlist'
 */
get_playlist.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: get_playlist.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:233
 * @route '/get-playlist'
 */
    const get_playlistForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: get_playlist.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:233
 * @route '/get-playlist'
 */
        get_playlistForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: get_playlist.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MediaController::get_playlist
 * @see app/Http/Controllers/MediaController.php:233
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
const MediaController = { halaman_cms, buat_media, upload, play, edit_media, update, destroy, reject, approve_and_play, ds_player, get_playlist }

export default MediaController