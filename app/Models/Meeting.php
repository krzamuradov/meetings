<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    protected $fillable = ["name_uz", "name_en", "meeting_date"];

    protected $casts = [
        'meeting_date' => 'date:Y-m-d',
    ];

    public function documents()
    {
        return $this->hasMany(Document::class);
    }
}
