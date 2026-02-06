<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Media;

class MediaEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $media;
    public $actionType;

    public function __construct(Media $media, $actionType = 'update')
    {
        $this->media = $media;
        $this->actionType = $actionType;
    }

    public function broadcastOn(): array
    {
        return [
            new Channel('media-channel'),
        ];
    }

    public function broadcastAs()
    {
        return 'media.uploaded';
    }

    public function broadcastWith()
    {
        $imageUrls = collect($this->media->images)->map(function ($path) {
            return asset('storage/' . $path);
        })->toArray();

        return [
            'id' => $this->media->id,
            'judul_media' => $this->media->judul_media,
            'running_text' => $this->media->running_text,
            'video_url' => asset('storage/' . $this->media->video_path),
            'images_url' => $imageUrls,
            'status' => $this->media->status,
            'action_type' => $this->actionType,
            'pushed_at' => now()->toDateTimeString(),
        ];
    }
}
