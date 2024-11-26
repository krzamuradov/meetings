<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $fillable = ["name_uz", "name_en", "file", "meeting_id", "original_name"];
}
