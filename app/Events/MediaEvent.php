<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Media;

class MediaEvent implements ShouldBroadcast
{
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $media;

  /**
   * Create a new event instance.
   */
  public function __construct(Media $media)
  {
    $this->media = $media;
  }

  /**
   * Get the channels the event should broadcast on.
   *
   * @return array<int, \Illuminate\Broadcasting\Channel>
   */
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
    return [
      'id' => $this->media->id,
      'type' => $this->media->type,
      'url' => asset('storage/' . $this->media->file_path),
      'judul_media' => $this->media->judul_media,
      'pushed_at' => now()->toDateTimeString(),
    ];
  }
}
