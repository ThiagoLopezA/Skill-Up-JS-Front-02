const Help = () => {
  return (
    <div className="container" style={{ paddingBottom: 80 }}>
      <h2 className="mb-5">¿Con qué te podemos ayudar?</h2>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Webapp
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="fw-bold">
                ¿Qué es y que puedo hacer en la WebApp de AlkyBank?
              </p>
              <p>
                La Webapp de AlkyBank es una alternativa que te ofrecemos para
                que puedas acceder a algunas funciones de nuestra app, desde
                cualquier navegador del celular o desde la web. Es fácil y podés
                entrar desde cualquier dispositivo. Podés chequear y ver
                información útil sobre tu cuenta y muchas cosas más.
              </p>
              <p>Acá te contamos todo lo que podés hacer:</p>
              <p>
                - Consultar tus movimientos y el detalle de los mismos. <br />
                - Consultar tu saldo. <br />
                - Acceder al análisis de gastos de tu cuenta. <br />
                - Congelar tu tarjeta virtual o física. <br />
                - Consultar las formas disponibles para cargar saldo. <br />-
                Denunciar tu tarjeta física en caso de robo o extravío.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Trasferencias y cargas
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Si tenés algún inconveniente con la acreditación de una
                transferencia o carga, podés comunicarte con nosotr@s para que
                te ayudemos. Te dejamos nuestr@s canales oficiales de atención:
              </p>
              <p>
                - Autogestión para cargas no acreditadas mediante un formulario
                en la app. Vas a encontrar este formulario ingresando en 👉
                “Ayuda” 👉 “Cargas y transferencias” 👉 “Cargué/Transferí plata
                y no se acreditó“ 👉 “Cargué o me transfirieron plata a mi
                AlkyBank y no se acreditó“. Ahí vas a poder completar los datos,
                sin necesidad de ingresar al chat. Luego, nosotros revisamos qué
                pasó y nos volvemos a comunicar con vos por mail para
                informartes las novedaes.
              </p>
              <p>
                - Chat de AlkyBank en la app (lo encontrás seleccionando, 👉
                “Ayuda“ 👉 “Contactanos“ 👉 “Escribinos por chat“) o dejanos un
                mail desde la WebApp en 👉 “Ayuda” 👉 “Contacto“.
              </p>
              <p>
                Si nos contactás mediante alguna de nuestras redes sociales,
                siempre verificá que sea nuestra cuenta oficial verificada. Te
                vas a dar cuenta porque tiene el tilde celeste de autenticación.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Formas de carga
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Podés cargar tu AlkyBank con efectivo o por transferencia. A
                continuación te brindamos más detalles:
              </p>
              <p className="fw-bold">Por transferencia:</p>
              <p>
                Recordá que cada cuenta AlkyBank tiene un CVU único, es decir,
                una Clave Virtual Uniforme que identifica la cuenta y te sirve
                para realizar transferencias entre cuentas bancarias con CBU y
                virtuales. No hay montos mínimos para transferir.
              </p>
              <p>
                Podés hacer o pedir que te hagan una transferencia desde
                cualquier cuenta bancaria o billetera virtual a tu CVU de
                AlkyBank/Alias. Para ver tu CVU desde la Webapp tenes que ir a
                👉 “Inicio“ 👉 “Ver CVU“ . Desde la app podes hacerlo en 👉
                “Cargar“ 👉 “Compartir mi CVU“.
              </p>
              <p className="fw-bold">En efectivo:</p>
              <p>
                Podés cargar tu AlkyBank con efectivo en cualquier Rapipago,
                Pago Fácil, Cobro Express o Telerecargas de Argentina
              </p>
              <p>
                - Si cargás en efectivo, solo tenés que acercarte a un local
                habilitado con el número de DNI de la cuenta AlkyBank. - En
                cambio, si cargás en Pago Fácil o Rapipago no te olvides de
                generar el código de carga desde tu app en 👉 ”Tarjeta” 👉
                ”Formas de Carga” 👉 ”En efectivo” 👉 ”Pago Fácil” o ”Rapipago”.
                Luego, pedile al cajero de la sucursal que busque ”AlkyBank” en
                su sistema y dale el código de carga (para Pago Fácil y
                Rapipago) o tu DNI (para Telerecargas y Cobro Express), pagá y
                ¡listo!.
              </p>
              <p>
                Las cargas y transferencias, son inmediatas. Todas tus cargas
                hasta $20.000 en el mes, serán gratuitas. Si cargás entre
                $20.000 y $50.000 en el mes, se cobrará 1%+ IVA sobre el importe
                de carga excedido. Si cargás más de $50.000 en el mes, se
                cobrará 3,5% + IVA sobre el importe de carga excedido.
              </p>
              <p>
                Te dejamos un ejemplo 👉 Si cargás $25.000 en efectivo, la
                comisión será del 1% + IVA sobre el monto excedido, es decir,
                sobre $5.000. Se descontará entonces $50 + IVA.
              </p>
              <p>¿Tenés dudas? Mirá este tutorial.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Claves y contraseñas
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="fw-bold">Contraseña</p>
              <p>
                La contraseña de la app es la clave alfanumérica (es decir,
                conformada por letras y números) que te permite ingresar a la
                app desde tu celular. Te la vamos a pedir cada vez que inicies
                sesión en la app. Podés cambiarla, eligí desde la app la opción
                👉 “Configuración“ 👉 “Seguridad“ 👉 “Cambiar mi contraseña“.
              </p>
              <p>
                Para recuperarla si no la recordás, entrá a la app de AlkyBank,
                seleccioná 👉 “Iniciá sesión” y elegí la opción 👉 “¿Olvidaste
                tu contraseña?”. Te va a llegar un código de recupero al mail
                que registraste en la app. Ingresalo en la app y cambiá tu
                contraseña.
              </p>
              <p>
                Si no tenés acceso al mail que registraste en la app, escribinos
                a hola@alkybank.com.ar y te ayudamos.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Retiro de efectivo
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>¿Cómo sacar efectivo?</p>
              <p>
                Tené en cuenta que sólo podés retirar el saldo disponible. Si
                tenés plata invertida, necesitás liberarla antes.
              </p>
              <p className="fw-bold">Desde un Rapipago</p>
              <p>
                👉 Ingresá a la sección “Tarjeta” y seleccioná la opción “Retiro
                por Rapipago”. <br /> 👉 Indicá el monto y obtené tu código de
                retiro. <br />
                👉 Acercate a cualquier Rapipago con tu DNI y decile tu código
                al cajero.
              </p>
              <p>
                Recordá que tenés una extracción gratis por mes en cualquier
                Rapipago del país, las siguientes tienen un costo que podés ver
                en nuestra web 👉 https://www.alkybank.com.ar/costos. No hay
                montos mínimos de extracción y podés hacer hasta dos
                extracciones al día por un máximo de $ 15.000 cada una. Tené
                presente que se pueden generar hasta 2 códigos de retiro por día
                y tenés un máximo de 8 extracciones por mes.
              </p>
              <p className="fw-bold">Desde un cajero automático:</p>
              <p>
                Podés retirar efectivo a través de cualquier cajero automático
                de la red Link o Banelco de la Argentina. Para hacerlo:
              </p>
              <ol>
                <li>
                  <p>Creá tu tu PIN de cajero:</p>
                  <p>
                    👉 Ingresá a la sección Tarjeta. <br /> 👉 Seleccioná la
                    opción Seguridad <br /> 👉 Seleccioná la opción Crear PIN de
                    cajero.
                  </p>
                </li>
                <li>
                  <p>
                    Cuando ya tengas el PIN, acercate a un cajero y seguí estos
                    pasos:
                  </p>
                  <p>
                    👉 Poné tu tarjeta. <br /> 👉 Ingresá tu PIN. <br /> 👉
                    Seleccioná la opción Extracciones/Adelantos y elegí Tarjeta
                    de Crédito (si el cajero es Link) o Cuenta Recargable (si el
                    cajero es Banelco).
                  </p>
                </li>
              </ol>
              <p>
                👉 El costo por extracción está publicado en nuestra web. Además
                podés sacar hasta $8.500 cada 24hs.
              </p>
              <p>¿Tenés dudas? Mirá este tutorial.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
