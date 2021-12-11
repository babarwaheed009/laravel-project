<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
class AuthController extends Controller
{
    function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);
        $auths = auth()->attempt(['username' => $request->username, 'password' => $request->password]);
        if ($auths) {
            $users = User::where('username', $request->username)->first();
            auth()->login($users);
            return redirect('/admin/product');
        } else {
            echo "Incorreact Email or Password";
        }
    }

    function logout(){
        auth()->logout();
        return redirect('/admin');
    }
}
