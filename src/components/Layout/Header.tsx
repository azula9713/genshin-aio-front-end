import DarkModeToggle from "../Custom/DarkModeToggle";

export default function Header() {
  return (
    <div className="border-2 border-red-500 h-16 max-h-16 w-screen flex items-center justify-between">
      <div className="w-2/3 h-16">Logo</div>
      <div className="flex justify-end space-x-3 items-center border-2 border-green-400 w-1/3 h-16">
        <div>
          <DarkModeToggle />
        </div>
        <div>Menu</div>
      </div>
    </div>
  );
}
