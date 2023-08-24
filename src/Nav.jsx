export default function Nav() {
  return (
    <div className="border-black border-b-2 flex justify-center items-center py-5 fixed w-full bg-slate-100 ">
      <div className="container flex justify-between items-center">
        <a href="/" className="font-bold text-4xl">
          MNF
        </a>

        <ul className="flex gap-7">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
