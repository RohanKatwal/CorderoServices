import Link from "next/link";
import LogoutButton from "./LogoutButton";
import Image from "next/image";

const DashboardHeader = () => {
  return (
    <header className="dashboard-header navbar navbar-content">
      <Link href={"/"}>
        <Image
          src={"/images/cordero-logo.svg"}
          width={120}
          height={65}
          alt="logo"
        />
      </Link>
      <LogoutButton />
    </header>
  );
};

export default DashboardHeader;
