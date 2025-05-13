import FileInput from "@/app/_components/FileInput";
import FormInputGroup from "@/app/_components/FormInputGroup";
import InputField from "@/app/_components/InputField";
import Image from "next/image";
import OT from "@/public/oak-tree.png";

export default function page() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-wide">Profile</h1>
      <div className="bg-white rounded-lg shadow-md mt-2">
        <div className="p-6">
          <div className="flex items-center gap-6">
            <Image
              src={OT}
              alt="The odaa tree"
              className="rounded-full w-24 h-24 bg-gray-300"
            />
            <div>
              <h2 className="text-xl font-medium">User Name</h2>
              <p className="text-gray-600">user@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <form className="space-y-6 pl-10">
          <FormInputGroup label="Full Name">
            <InputField type="text" id="name" defaultValue="User Name" />
          </FormInputGroup>

          <FormInputGroup label="Email">
            <InputField
              type="email"
              id="email"
              defaultValue="user@example.com"
            />
          </FormInputGroup>

          <FormInputGroup label="New password (min 8 chars)">
            <InputField
              type="password"
              id="password"
              defaultValue="********"
              autoComplete="current-password"
            />
          </FormInputGroup>

          <FormInputGroup label="Confirm password">
            <InputField
              type="password"
              id="password"
              defaultValue="********"
              autoComplete="new-password"
            />
          </FormInputGroup>

          <FormInputGroup label="Avatar image">
            <FileInput />
          </FormInputGroup>

          <div className="flex items-center gap-4 justify-center translate-x-10">
            <button
              type="rest"
              className="px-4 py-2 bg-gray-50 border cursor-pointer text-black border-gray-200 rounded-sm shadow-md hover:bg-gray-100 focus:border-gray-200 focus:border-2 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-red-600 cursor-pointer hover:bg-red-700 text-white rounded-sm font-medium shadow-md transition-colors duration-150 ease-in-out"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
