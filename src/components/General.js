


const GeneralForm = () => {
    return (
        <>

          <form> 
              <label> 
                  <input type="text"  id="firstname"  placeholder="First Name"/>
              </label>

              <label> 
                  <input type="text"  id="lastname" placeholder="Last Name" />
              </label>

              <label>
                  <input type="text" id="role" placeholder="Role"/>
              </label>


              <label> 
                  <input type="number"  id="phone"  placeholder="Phone Number"/>
              </label>


              <label> 
                  <input type="email"  id="email" placeholder="Email Address"/>
              </label>

            <textarea placeholder="professional summary" />
          </form>

        </>
    )
}


export  default GeneralForm;