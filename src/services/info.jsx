import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function infoAlert(title, message) {
  MySwal.fire({
    title: title,
    text: message,
    icon: "info",
    iconColor: "#EC5800",
  });
}

export default infoAlert;
