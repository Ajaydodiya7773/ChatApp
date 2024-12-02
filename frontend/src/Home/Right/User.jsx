

function User() {
  return (
    <>
      <div >
        <div className="flex p-2 my-1 py-7 space-x-4 px-5  hover:bg-slate-600 duration-100 cursor-pointer">
          <div className="avatar online">
            <div className="w-14 rounded-full ">
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/kartik-aaryan-243026331-16x9_0.jpg?VersionId=Yx04oQd9ZPV8mT2_W4v.Zf7M3Cpj6hlR&size=690:388" />
            </div>
          </div>
          <div>
            <h1 className="font-bold">Ajay Singh</h1>
            <span>Ajay29@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
