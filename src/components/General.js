


const GeneralForm = () => {
    return (
        <>
        <h1 className="mx-auto upperclass font-bold"> Personal Information</h1>
          <form className="grid grid-cols-2 grid-rows-5 gap-3"> 

            <input className="border py-1 px-3 text-grey-darkest rounded-full" type="text"  id="firstname"  placeholder="First Name"/>

            <input className="border py-2 px-3 text-grey-darkest rounded-full"  type="text"  id="lastname" placeholder="Last Name" />

            <input className="border py-2 px-3 text-grey-darkest rounded-full"  type="text" id="role" placeholder="Role"/>
            
            <input className="border py-2 px-3 text-grey-darkest rounded-full" type="number"  id="phone"  placeholder="Phone Number"/>

            <input className="border py-2 px-3 text-grey-darkest rounded-full"  type="email"  id="email" placeholder="Email Address"/>
        
            <textarea placeholder="professional summary"  className="border py-2 px-3 text-grey-darkest"  />

            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-40 mx-auto">Submit </button> 
            <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-40 mx-auto"> Edit </button>
          </form>
        </>
    )
}


export  default GeneralForm;