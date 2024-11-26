<?php

namespace App\Http\Controllers;

use App\Http\Requests\MeetingStore;
use App\Models\Meeting;
use Illuminate\Http\Request;

class MeetingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Meeting::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MeetingStore $request)
    {
        $validated = $request->validated();
        $meeting = Meeting::create($validated);
        if ($meeting) {
            return response()->json(["message" => "Muvaffaqiyatli saqlandi", "data" => $meeting], 201);
        } else {
            return response()->json(["message" => "Xatolik yuz berdi"], status: 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Meeting $meeting)
    {
        return $meeting->load("documents");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Meeting $meeting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Meeting $meeting)
    {
        //
    }
}
