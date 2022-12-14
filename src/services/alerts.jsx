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

function errorAlert(title, message) {
  MySwal.fire({
    title: title,
    text: message,
    icon: "error",
  });
}

function infoAlert(title, message) {
  MySwal.fire({
    title: title,
    text: message,
    icon: "info",
    iconColor: "#EC5800",
  });
}

const questionAlert = async (title, message) => {
  try {
    const response = await MySwal.fire({
      title: title,
      text: message,
      icon: "question",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonColor: "#3CB371",
      confirmButtonText: "Sí",
    });
    if (response.isConfirmed) {
      MySwal.fire(
        "Éxito",
        "La operación fue realizada exitosamente",
        "success"
      );
    } else if (response.isDenied) {
      MySwal.fire("Información", "La operación fue cancelada", "info");
    }
  } catch (error) {
    console.log(error);
  }
};

export default { confirmAlert, errorAlert, infoAlert, questionAlert };
