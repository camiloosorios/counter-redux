import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./store/store"
import { decrement, increment, reset } from "./slices/counterSlice";
import { ChangeEvent, FormEvent, useState } from "react";
import { User, addUser } from "./slices/userSlice";

function App() {
  
      const count = useSelector((state : RootState) => state.counter.value);
      const users = useSelector((state : RootState) => state.users.users);
      const dispatch = useDispatch();

      const userInitialState = {
        name : '',
        age : 0
      }

      const [user, setUser] = useState<User>(userInitialState);

      const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        setUser({
          ...user,
          [event.target.name] : event.target.value
        });        
      }

      const handleSubmit = (event : FormEvent) => {
        event.preventDefault();
        dispatch(addUser(user));
        setUser(userInitialState);
      }

  return (
    <>
      <h1 className="text-4xl text-center font-bold text-white mt-10">Counter</h1>
      <div className="w-40 mx-auto flex justify-center mt-10">
        <button 
          className="px-3 py-2 bg-gray-600 shadow-md font-bold text-white"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <p className="px-3 text-2xl text-white font-semibold">
          {count}
        </p>
        <button 
          className="px-3 py-2 bg-gray-600 shadow-md font-bold text-white"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="flex justify-center">
        <button 
          className="bg-gray-600 px-3 py-2 mt-5 items-center text-white font-semibold"
          onClick={() => dispatch(reset())}
        >Reset Counter</button>
      </div>
      <h1 className="text-4xl text-center font-bold text-white mt-10">Users Information</h1>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          {users.length ? (
            <div>
              {users.map(user => (
                <div className="p-5 bg-gray-300 shadow-lg mb-2">
                  <p 
                    className="text-xl font-bold"
                  >Nombre : <span className="font-normal text-gray-600">{user.name}</span></p>
                  <p 
                    className="text-xl font-bold"
                  >Edad : <span className="font-normal text-gray-600">{user.age}</span></p>
                </div>
              ))}
            </div>
          ) : <p className="text-xl text-center text-white">No hay usuarios aún</p>}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="my-5 ">
              <label 
                htmlFor="name"
                className="text-xl font-semibold text-white block"
              >Nombre</label>
              <input 
                type="text" 
                name="name"
                id="name"
                className="w-72 bg-gray-200 py-2 px-3"
                placeholder="Nombre"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5 ">
              <label 
                htmlFor="age"
                className="text-xl font-semibold text-white block"
              >Edad</label>
              <input 
                type="text" 
                name="age"
                id="age"
                className="w-72 bg-gray-200 py-2 px-3"
                placeholder="Nombre"
                value={user.age}
                onChange={handleChange}
              />
            </div>
            <input 
              type="submit" 
              className="bg-gray-600 hover:bg-slate-700 transition-colors text-white px-3 py-2 cursor-pointer w-72"
              value="Guardar"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default App
