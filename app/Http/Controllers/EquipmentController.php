<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Equipment;

class EquipmentController extends Controller
{
    public function index($id)
    {
        $equips = Equipment::where('lab_id',$id)->get();
        return $equips;
    }

    public function store(Request $request, $id)
    {
        $equip = new Equipment;
        $equip->lab_id = $id;
        $equip->name = $request->name;
        $equip->quantity = $request->quantity;
        $equip->save();
    }

    public function edit($id)
    {
        $equip = Equipment::find($id);
        return $equip;
    }

    public function update(Request $request,$id)
    {
        $equip = Equipment::find($id);
        $equip->name = $request->name;
        $equip->quantity = $request->quantity;
        $equip->update();
    }
}
