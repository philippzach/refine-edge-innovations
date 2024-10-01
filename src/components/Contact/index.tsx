import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Holen Sie Ihr Angebot jetzt ein
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Kontaktieren Sie uns für ein individuelles Angebot und erleben
                Sie den Unterschied, den wahre Handwerkskunst machen kann.
              </p>
              <form action="https://formspree.io/f/xanwrqar" method="POST">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Dein Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Gib deinen Namen ein"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Deine Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Gib deine Email ein"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Deine Telefonnummer
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Gib deine Telefonnummer ein"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="metal"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Art von Metall
                      </label>
                      <select
                        name="metal"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      >
                        <option value="">Wähle eine Option</option>
                        <option value="Stahl">Stahl</option>
                        <option value="Edelstahl">Edelstahl</option>
                        <option value="Aluminium">Aluminium</option>
                        <option value="Messing">Messing</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Kupfer">Kupfer</option>
                        <option value="Zamak">Zamak</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 flex items-center text-sm font-medium text-dark dark:text-white">
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="lackiert"
                        />
                        Lackiert?
                      </label>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="size"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Größe (in cm)
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          name="width"
                          placeholder="Breite"
                          className="border-stroke w-1/3 rounded-sm border bg-[#f8f8f8] px-3 py-2 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                        <input
                          type="number"
                          name="height"
                          placeholder="Höhe"
                          className="border-stroke w-1/3 rounded-sm border bg-[#f8f8f8] px-3 py-2 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                        <input
                          type="number"
                          name="length"
                          placeholder="Länge"
                          className="border-stroke w-1/3 rounded-sm border bg-[#f8f8f8] px-3 py-2 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="description"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Beschreibung des Objekts
                      </label>
                      <input
                        type="text"
                        name="description"
                        placeholder="Beschreibe kurz das Objekt"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  {/*  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="picture"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Bild des Objekts hochladen
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div> */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Deine Nachricht
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Gib deine Nachricht ein"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Gratis Angebot einfordern
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
