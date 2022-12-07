import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function confirmAlert(title, message) {
  MySwal.fire({
    title: title,
    text: message,
    icon: "success",
  });
}

export default confirmAlert;
