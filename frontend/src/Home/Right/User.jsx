

function User() {
  return (
    <>
      <div >
        <div className="flex p-2 my-1 py-7 space-x-4 px-5  hover:bg-slate-600 duration-100 cursor-pointer">
          <div className="avatar online">
            <div className="w-14 rounded-full ">
              <img src="https://scontent.fidr1-1.fna.fbcdn.net/v/t39.30808-1/310374530_3229490203969192_1487719558652802743_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=77VsvCVvcMIQ7kNvgFC7EeE&_nc_ht=scontent.fidr1-1.fna&oh=00_AYBMLsvwbd4ltTHHYXUyLUojI-zSFoCU6lqunKr-tNQksg&oe=66C272C3" />
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
