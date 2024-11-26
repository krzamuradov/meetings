<?php

namespace App\Http\Controllers;

use App\Http\Requests\DocumentStore;
use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DocumentStore $request)
    {
        if ($request->hasFile("file")) {
            $file = $request->file('file');
            $originalName = $file->getClientOriginalName();
            $path = $file->store('uploads', 'public');
            $validated = $request->validated();
            $validated["original_name"] = $originalName;
            $validated["file"] = $path;

            $document = Document::create($validated);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        //
    }
}
