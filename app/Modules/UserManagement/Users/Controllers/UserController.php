<?php

namespace App\Modules\UserManagement\Users\Controllers;

use App\Modules\UserManagement\Users\Requests\StoreUserRequest;
use App\Modules\UserManagement\Users\Requests\UpdateUserRequest;
use App\Modules\UserManagement\Users\Resources\UserResource;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Modules\UserManagement\Users\Models\User;

class UserController extends Controller
{
    public function index() {
        $users = UserResource::collection(User::all());

        return Inertia::render('UserManagement/User/Views/Index', compact('users'));
    }

    public function store(StoreUserRequest $request) {

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->is_admin = $request->is_admin;
        $user->save();

        return redirect()->route('user-management.users.index')->with('success', 'User created successfully.');
    }

    public function update(UpdateUserRequest $request, User $user)  {
        $user->name = $request->name;
        $user->email = $request->email;
        $user->is_admin = $request->is_admin;
        $user->password = $request->password ? bcrypt($request->password) : $user->password;
        $user->update();

        return redirect()->route('user-management.users.index')->with('success', 'User updated successfully.');
    }

    public function destroy(User $user) {
        $user->delete();

        return redirect()->route('user-management.users.index')->with('success', 'User deleted successfully.');
    }

    public function destroyMulti(Request $request) {
        $ids = $request->ids;
        isset($ids) && User::destroy($ids);

        return redirect()->route('user-management.users.index')->with('success', 'Users deleted successfully.');
    }

}
