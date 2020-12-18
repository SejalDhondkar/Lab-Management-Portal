<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Lab;

class LabController extends Controller
{
    public function index()
    {
        $labs = Lab::all();
        return $labs;
    }

    public function store(Request $request)
    {
        $lab = new Lab;
        $lab->name = $request->name;
        $lab->save();
    }

    public function edit($id)
    {
        $lab = Lab::find($id);
        return $lab;
    }

    public function update(Request $request,$id)
    {
        $lab = Lab::find($id);
        $lab->name = $request->name;
        $lab->update();
    }

}
