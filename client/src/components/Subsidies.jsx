import React from "react";
import "./Subsidies.css"
const Subsidies = () => {
  return (
    <div className="container mx-auto">
      <div style={{
        backgroundColor: "black"
      }}>
        <div className="pt-3 pb-3 lg:pt-5 lg:pb-5 flex justify-center text-white items-center flex-col"
          style={{
            background: `linear-gradient( to bottom, rgba(0, 0, 0, 0.4) 0%,rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1.0) 100%), url(/Subsidiesbg.jpg)`,
          }}>
          <div className="text-center font-hindi text-9xl mt-40 mb-16"> Subsidies </div>
          <div className="flex justify-center">
            <div className="hidden lg:block lg:w-3/4 text-center text-2xl text-white mb-20">
              Our comprehensive platform offers valuable insights into government subsidies designed to support farmers. We furnish detailed information on a wide array of financial incentives and assistance programs offered by local, state, and federal governments. These subsidies cover aspects such as crop insurance, equipment financing, land conservation, and more, empowering farmers to make informed decisions and optimize their agricultural operations. We're dedicated to facilitating access to these vital resources, ensuring a sustainable and prosperous farming community.
            </div>
          </div>
          <div className="flex justify-center">
            <div className="lg:hidden lg:w-3/4 text-center text-md text-white mb-20">
              Our comprehensive platform offers valuable insights into government subsidies designed to support farmers. We furnish detailed information on a wide array of financial incentives and assistance programs offered by local, state, and federal governments. These subsidies cover aspects such as crop insurance, equipment financing, land conservation, and more, empowering farmers to make informed decisions and optimize their agricultural operations. We're dedicated to facilitating access to these vital resources, ensuring a sustainable and prosperous farming community.
            </div>
          </div>
        </div>

        <div className="pt-3 pb-3 lg:pt-5 lg:pb-5 ">
          <div className="text-white my-20 font-hindi text-9xl text-center"> Bulletin </div>

          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="hidden lg:block lg:w-3/4 text-white text-2xl">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/ssy">
                <strong>1. Sukanya Samriddhi Yojana (SSY): </strong>
              </a>
              <p>
                - This small savings scheme encourages parents to save for their girl child's education and marriage expenses.
              </p>
              <p>
                - It offers a high rate of interest and tax benefits.
              </p>
            </div>
          </div>
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="lg:hidden lg:w-3/4 text-center text-xl text-white">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/ssy">
                <strong>1. Sukanya Samriddhi Yojana (SSY): </strong>
              </a>
              <p>
                - This small savings scheme encourages parents to save for their girl child's education and marriage expenses.
              </p>
              <p>
                - It offers a high rate of interest and tax benefits.
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="hidden lg:block lg:w-3/4 text-white text-2xl">
              <a className="text-white" href="https://sbi.co.in/web/personal-banking/investments-deposits/govt-schemes/ppf">
                <strong>2. Public Provident Fund (PPF): </strong>
              </a>
              <p>
                - The PPF is a long-term savings scheme that provides attractive interest rates and income tax benefits.
              </p>
              <p>
                - It can be opened by rural individuals and helps in long-term wealth creation.
              </p>
            </div>
          </div>
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="lg:hidden lg:w-3/4 text-center text-xl text-white">
              <a className="text-white" href="https://sbi.co.in/web/personal-banking/investments-deposits/govt-schemes/ppf">
                <strong>2. Public Provident Fund (PPF): </strong>
              </a>
              <p>
                - The PPF is a long-term savings scheme that provides attractive interest rates and income tax benefits.
              </p>
              <p>
                - It can be opened by rural individuals and helps in long-term wealth creation.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="hidden lg:block lg:w-3/4 text-white text-2xl">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/pomis">
                <strong>3. Post Office Monthly Income Scheme (POMIS): </strong>
              </a>
              <p>
                - Offered by both traditional post offices and IPPB, POMIS provides a stable monthly income to investors.
              </p>
              <p>
                - It's a suitable investment option for those looking for regular income in rural areas.
              </p>
            </div>
          </div>
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="lg:hidden lg:w-3/4 text-center text-xl text-white">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/pomis">
                <strong>3. Post Office Monthly Income Scheme (POMIS): </strong>
              </a>
              <p>
                - Offered by both traditional post offices and IPPB, POMIS provides a stable monthly income to investors.
              </p>
              <p>
                - It's a suitable investment option for those looking for regular income in rural areas.
              </p>
            </div>
          </div>
          {/* Row 4 */}
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="hidden lg:block lg:w-3/4 text-white text-2xl">
              <a className="text-white" href="https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx">
                <strong>4. Kisan Vikas Patra (KVP): </strong>
              </a>
              <p>
                - KVP is a fixed-income, small savings instrument that can be purchased from post offices and IPPB.
              </p>
              <p>
                - It offers a fixed rate of return and can be a reliable savings option for rural residents.
              </p>
            </div>
          </div>
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="lg:hidden lg:w-3/4 text-center text-xl text-white">
              <a className="text-white" href="https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx">
                <strong>4. Kisan Vikas Patra (KVP): </strong>
              </a>
              <p>
                - KVP is a fixed-income, small savings instrument that can be purchased from post offices and IPPB.
              </p>
              <p>
                - It offers a fixed rate of return and can be a reliable savings option for rural residents.
              </p>
            </div>
          </div>
          {/* Row 5 */}
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="hidden lg:block lg:w-3/4 text-white text-2xl">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/scss">
                <strong>5. Senior Citizens Savings Scheme (SCSS): </strong>
              </a>
              <p>
                - SCSS is designed for senior citizens and offers attractive interest rates and regular income.
              </p>
              <p>
                - It is accessible to rural senior citizens looking for safe investment options.
              </p>
            </div>
          </div>
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="lg:hidden lg:w-3/4 text-center text-xl text-white">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/scss">
                <strong>5. Senior Citizens Savings Scheme (SCSS): </strong>
              </a>
              <p>
                - SCSS is designed for senior citizens and offers attractive interest rates and regular income.
              </p>
              <p>
                - It is accessible to rural senior citizens looking for safe investment options.
              </p>
            </div>
          </div>
          {/* Row 6 */}
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="hidden lg:block lg:w-3/4 text-white text-2xl">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/sui">
                <strong>6. Stand-Up India: </strong>
              </a>
              <p>
                - While not exclusive to rural areas, Stand-Up India provides loans to promote entrepreneurship among SC/ST and women.
              </p>
              <p>
                - It can support rural entrepreneurs in starting and expanding businesses.
              </p>
            </div>
          </div>
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="lg:hidden lg:w-3/4 text-center text-xl text-white">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/sui">
                <strong>6. Stand-Up India: </strong>
              </a>
              <p>
                - While not exclusive to rural areas, Stand-Up India provides loans to promote entrepreneurship among SC/ST and women.
              </p>
              <p>
                - It can support rural entrepreneurs in starting and expanding businesses.
              </p>
            </div>
          </div>
          {/* Row 7 */}
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="hidden lg:block lg:w-3/4 text-white text-2xl">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/pmmy">
                <strong>7. Mudra Yojana (Pradhan Mantri Mudra Yojana): </strong>
              </a>
              <p>
                - Mudra Yojana provides loans to micro and small businesses, including those in rural areas.
              </p>
              <p>
                - It helps rural entrepreneurs with credit needs to grow their businesses.
              </p>
            </div>
          </div>
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="lg:hidden lg:w-3/4 text-center text-xl text-white">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/pmmy">
                <strong>7. Mudra Yojana (Pradhan Mantri Mudra Yojana): </strong>
              </a>
              <p>
                - Mudra Yojana provides loans to micro and small businesses, including those in rural areas.
              </p>
              <p>
                - It helps rural entrepreneurs with credit needs to grow their businesses.
              </p>
            </div>
          </div>
          {/* Row 8 */}
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="hidden lg:block lg:w-3/4 text-white text-2xl">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/pmjjby">
                <strong>8. Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY): </strong>
              </a>
              <p>
                - PMJJBY is a government-backed life insurance scheme that can be availed through nationalized banks and IPPB.
              </p>
              <p>
                - It offers affordable life insurance coverage for rural individuals.
              </p>
            </div>
          </div>
          <div className="flex justify-center hover:scale-110 transition-all transition-200 my-6">
            <div className="lg:hidden lg:w-3/4 text-center text-xl text-white">
              <a className="text-white" href="https://www.myscheme.gov.in/schemes/pmjjby">
                <strong>8. Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY): </strong>
              </a>
              <p>
                - PMJJBY is a government-backed life insurance scheme that can be availed through nationalized banks and IPPB.
              </p>
              <p>
                - It offers affordable life insurance coverage for rural individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsidies;
