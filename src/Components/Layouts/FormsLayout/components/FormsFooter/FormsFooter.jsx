import React from "react";
import SecureFooter from "./components/SecureFooter/SecureFooter";
import AppStoresFooter from "./components/AppStoresFooter/AppStoresFooter";

export default function FormsFooter() {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0">
        <div className="col-12 d-flex p-0">
          <div className="col-12 col-md-6">
            <SecureFooter />
          </div>
          <div className="d-none d-md-flex col-md-6">
            <AppStoresFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
