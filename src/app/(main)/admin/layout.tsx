import Sidebar from "@/components/admin/Sidebar";
import Image from "next/image";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar fixa no topo */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom border-dark-subtle">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-controls="offcanvasSidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand p-0" href="#">
            <Image src="/logo-viabus-1.png" alt="Logo Viabus" width={100} height={40}/>
          </a>
        </div>
      </nav>

      {/* Layout principal */}
      <div className="container-fluid" style={{ marginTop: "56px", height: "calc(100vh - 56px)" }}>
        <div className="row flex-nowrap h-100">
          {/* Sidebar offcanvas para dispositivos móveis */}
          <div
            className="offcanvas offcanvas-start bg-dark text-white"
            id="offcanvasSidebar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">VIABUS</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body p-0">
              <Sidebar />
            </div>
          </div>

          {/* Sidebar fixa para telas maiores */}
          <div className="col-md-3 col-lg-2 bg-dark text-white d-none d-md-block">
            <Sidebar />
          </div>

          {/* Conteúdo principal com scroll interno */}
          <div className="col-md-9 col-lg-10 p-md-3 overflow-auto">
            <div className="content-wrapper w-100">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
