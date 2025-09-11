import TextField from "../../component/UI/TextField"


function Login() {
  return (

    <div className="min-h-screen" >

      <div className="text-center my-20" >
        <h1 className="text-[43px] font-bold" > CAMICO </h1>
        <h2 className="text-[16px]" > Intelligent Service </h2>
      </div>

      <h2 className="font-bold text-center leading-none tracking-normal" >Welcome Back!</h2>

      <form className="w-[226px] mx-auto mt-auto py-8" >
        <div >
          <TextField
            label='Email adreess'
            placeholder='example@gmail.com'
            type='email'
          />

          <TextField
            label='Password'
            placeholder='Password'
            type='password'
          />
          <p className="text-[#8E8E93] my-2 font-normal tracking-[0.01em] leading-[14px] h-[28px] text-[12px]" > Use at latest 8 characters with 1 number , and on special character. </p>
        </div>

        <button className="w-[226px] h-[33px] bg-[#27AE60] rounded-[34px] my-2 text-[#ffff]" >
          Log in
        </button>

        <div className="text-center" >
          <a className="text-[#8E8E93] underline cursor-pointer" > Forget Password? </a>
        </div>

      </form>

    </div>

  )
}

export default Login