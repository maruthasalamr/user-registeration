import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function Personaldetails({ selectfun }) {
  const [personaldetailsform, setpersonaldetailsform] = useState({
    name: "",
    gender: "",
    country: "",
    state: "",
    phone: "",
  });
  const [listcountry, setlistcountry] = useState([]);
  const handleChange = (e, { value }) => {
    setpersonaldetailsform({ ...personaldetailsform, country: value });
    console.log("value", value);
    fetch(`https://api.countrystatecity.in/v1/countries/${value}/states`, {
      method: "GET",
      headers: {
        "X-CSCAPI-KEY":
          "U280akNjUkJLN290bzBHa2JOSVhtY1FhYlhjZEFob212ajR2c2xBMQ==",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result);
          setlistcountry(result);
        },
        (error) => {
          console.log("result", error);
        }
      );
  };
  const country = [
    { flag: "af", text: "Afghanistan", value: "AF" },
    { flag: "ax", text: "Åland Islands", value: "AX" },
    { flag: "al", text: "Albania", value: "AL" },
    { flag: "dz", text: "Algeria", value: "DZ" },
    { flag: "as", text: "American Samoa", value: "AS" },
    { flag: "ad", text: "AndorrA", value: "AD" },
    { flag: "ao", text: "Angola", value: "AO" },
    { flag: "ai", text: "Anguilla", value: "AI" },
    { flag: "aq", text: "Antarctica", value: "AQ" },
    { flag: "ag", text: "Antigua and Barbuda", value: "AG" },
    { flag: "ar", text: "Argentina", value: "AR" },
    { flag: "am", text: "Armenia", value: "AM" },
    { flag: "aw", text: "Aruba", value: "AW" },
    { flag: "au", text: "Australia", value: "AU" },
    { flag: "at", text: "Austria", value: "AT" },
    { flag: "az", text: "Azerbaijan", value: "AZ" },
    { flag: "bs", text: "Bahamas", value: "BS" },
    { flag: "bh", text: "Bahrain", value: "BH" },
    { flag: "bd", text: "Bangladesh", value: "BD" },
    { flag: "bb", text: "Barbados", value: "BB" },
    { flag: "by", text: "Belarus", value: "BY" },
    { flag: "be", text: "Belgium", value: "BE" },
    { flag: "bz", text: "Belize", value: "BZ" },
    { flag: "bj", text: "Benin", value: "BJ" },
    { flag: "bm", text: "Bermuda", value: "BM" },
    { flag: "bt", text: "Bhutan", value: "BT" },
    { flag: "bo", text: "Bolivia", value: "BO" },
    { flag: "ba", text: "Bosnia and Herzegovina", value: "BA" },
    { flag: "bw", text: "Botswana", value: "BW" },
    { flag: "bv", text: "Bouvet Island", value: "BV" },
    { flag: "br", text: "Brazil", value: "BR" },
    { flag: "io", text: "British Indian Ocean Territory", value: "IO" },
    { flag: "bn", text: "Brunei Darussalam", value: "BN" },
    { flag: "bg", text: "Bulgaria", value: "BG" },
    { flag: "bf", text: "Burkina Faso", value: "BF" },
    { flag: "bi", text: "Burundi", value: "BI" },
    { flag: "kh", text: "Cambodia", value: "KH" },
    { flag: "cm", text: "Cameroon", value: "CM" },
    { flag: "ca", text: "Canada", value: "CA" },
    { flag: "cv", text: "Cape Verde", value: "CV" },
    { flag: "ky", text: "Cayman Islands", value: "KY" },
    { flag: "cf", text: "Central African Republic", value: "CF" },
    { flag: "td", text: "Chad", value: "TD" },
    { flag: "cl", text: "Chile", value: "CL" },
    { flag: "cn", text: "China", value: "CN" },
    { flag: "cx", text: "Christmas Island", value: "CX" },
    { flag: "cc", text: "Cocos (Keeling) Islands", value: "CC" },
    { flag: "co", text: "Colombia", value: "CO" },
    { flag: "km", text: "Comoros", value: "KM" },
    { flag: "cg", text: "Congo", value: "CG" },
    { flag: "cd", text: "Congo, The Democratic Republic of the", value: "CD" },
    { flag: "ck", text: "Cook Islands", value: "CK" },
    { flag: "cr", text: "Costa Rica", value: "CR" },
    { flag: "ci", text: "Cote D Ivoire", value: "CI" },
    { flag: "hr", text: "Croatia", value: "HR" },
    { flag: "cu", text: "Cuba", value: "CU" },
    { flag: "cy", text: "Cyprus", value: "CY" },
    { flag: "cz", text: "Czech Republic", value: "CZ" },
    { flag: "dk", text: "Denmark", value: "DK" },
    { flag: "dj", text: "Djibouti", value: "DJ" },
    { flag: "dm", text: "Dominica", value: "DM" },
    { flag: "do", text: "Dominican Republic", value: "DO" },
    { flag: "ec", text: "Ecuador", value: "EC" },
    { flag: "eg", text: "Egypt", value: "EG" },
    { flag: "sv", text: "El Salvador", value: "SV" },
    { flag: "gq", text: "Equatorial Guinea", value: "GQ" },
    { flag: "er", text: "Eritrea", value: "ER" },
    { flag: "ee", text: "Estonia", value: "EE" },
    { flag: "et", text: "Ethiopia", value: "ET" },
    { flag: "fk", text: "Falkland Islands (Malvinas)", value: "FK" },
    { flag: "fo", text: "Faroe Islands", value: "FO" },
    { flag: "fj", text: "Fiji", value: "FJ" },
    { flag: "fi", text: "Finland", value: "FI" },
    { flag: "fr", text: "France", value: "FR" },
    { flag: "gf", text: "French Guiana", value: "GF" },
    { flag: "pf", text: "French Polynesia", value: "PF" },
    { flag: "tf", text: "French Southern Territories", value: "TF" },
    { flag: "ga", text: "Gabon", value: "GA" },
    { flag: "gm", text: "Gambia", value: "GM" },
    { flag: "ge", text: "Georgia", value: "GE" },
    { flag: "de", text: "Germany", value: "DE" },
    { flag: "gh", text: "Ghana", value: "GH" },
    { flag: "gi", text: "Gibraltar", value: "GI" },
    { flag: "gr", text: "Greece", value: "GR" },
    { flag: "gl", text: "Greenland", value: "GL" },
    { flag: "gd", text: "Grenada", value: "GD" },
    { flag: "gp", text: "Guadeloupe", value: "GP" },
    { flag: "gu", text: "Guam", value: "GU" },
    { flag: "gt", text: "Guatemala", value: "GT" },
    { flag: "gg", text: "Guernsey", value: "GG" },
    { flag: "gn", text: "Guinea", value: "GN" },
    { flag: "gw", text: "Guinea-Bissau", value: "GW" },
    { flag: "gy", text: "Guyana", value: "GY" },
    { flag: "ht", text: "Haiti", value: "HT" },
    { flag: "hm", text: "Heard Island and Mcdonald Islands", value: "HM" },
    { flag: "va", text: "Holy See (Vatican City State)", value: "VA" },
    { flag: "hn", text: "Honduras", value: "HN" },
    { flag: "hk", text: "Hong Kong", value: "HK" },
    { flag: "hu", text: "Hungary", value: "HU" },
    { flag: "is", text: "Iceland", value: "IS" },
    { flag: "in", text: "India", value: "IN" },
    { flag: "id", text: "Indonesia", value: "ID" },
    { flag: "ir", text: "Iran, Islamic Republic Of", value: "IR" },
    { flag: "iq", text: "Iraq", value: "IQ" },
    { flag: "ie", text: "Ireland", value: "IE" },
    { flag: "im", text: "Isle of Man", value: "IM" },
    { flag: "il", text: "Israel", value: "IL" },
    { flag: "it", text: "Italy", value: "IT" },
    { flag: "jm", text: "Jamaica", value: "JM" },
    { flag: "jp", text: "Japan", value: "JP" },
    { flag: "je", text: "Jersey", value: "JE" },
    { flag: "jo", text: "Jordan", value: "JO" },
    { flag: "kz", text: "Kazakhstan", value: "KZ" },
    { flag: "ke", text: "Kenya", value: "KE" },
    { flag: "ki", text: "Kiribati", value: "KI" },
    { flag: "kp", text: "Korea, Democratic People S Republic of", value: "KP" },
    { flag: "kr", text: "Korea, Republic of", value: "KR" },
    { flag: "kw", text: "Kuwait", value: "KW" },
    { flag: "kg", text: "Kyrgyzstan", value: "KG" },
    { flag: "la", text: "Lao People S Democratic Republic", value: "LA" },
    { flag: "lv", text: "Latvia", value: "LV" },
    { flag: "lb", text: "Lebanon", value: "LB" },
    { flag: "ls", text: "Lesotho", value: "LS" },
    { flag: "lr", text: "Liberia", value: "LR" },
    { flag: "ly", text: "Libyan Arab Jamahiriya", value: "LY" },
    { flag: "li", text: "Liechtenstein", value: "LI" },
    { flag: "lt", text: "Lithuania", value: "LT" },
    { flag: "lu", text: "Luxembourg", value: "LU" },
    { flag: "mo", text: "Macao", value: "MO" },
    {
      flag: "mk",
      text: "Macedonia, The Former Yugoslav Republic of",
      value: "MK",
    },
    { flag: "mg", text: "Madagascar", value: "MG" },
    { flag: "mw", text: "Malawi", value: "MW" },
    { flag: "my", text: "Malaysia", value: "MY" },
    { flag: "mv", text: "Maldives", value: "MV" },
    { flag: "ml", text: "Mali", value: "ML" },
    { flag: "mt", text: "Malta", value: "MT" },
    { flag: "mh", text: "Marshall Islands", value: "MH" },
    { flag: "mq", text: "Martinique", value: "MQ" },
    { flag: "mr", text: "Mauritania", value: "MR" },
    { flag: "mu", text: "Mauritius", value: "MU" },
    { flag: "yt", text: "Mayotte", value: "YT" },
    { flag: "mx", text: "Mexico", value: "MX" },
    { flag: "fm", text: "Micronesia, Federated States of", value: "FM" },
    { flag: "md", text: "Moldova, Republic of", value: "MD" },
    { flag: "mc", text: "Monaco", value: "MC" },
    { flag: "mn", text: "Mongolia", value: "MN" },
    { flag: "ms", text: "Montserrat", value: "MS" },
    { flag: "ma", text: "Morocco", value: "MA" },
    { flag: "mz", text: "Mozambique", value: "MZ" },
    { flag: "mm", text: "Myanmar", value: "MM" },
    { flag: "na", text: "Namibia", value: "NA" },
    { flag: "nr", text: "Nauru", value: "NR" },
    { flag: "np", text: "Nepal", value: "NP" },
    { flag: "nl", text: "Netherlands", value: "NL" },
    { flag: "an", text: "Netherlands Antilles", value: "AN" },
    { flag: "nc", text: "New Caledonia", value: "NC" },
    { flag: "nz", text: "New Zealand", value: "NZ" },
    { flag: "ni", text: "Nicaragua", value: "NI" },
    { flag: "ne", text: "Niger", value: "NE" },
    { flag: "ng", text: "Nigeria", value: "NG" },
    { flag: "nu", text: "Niue", value: "NU" },
    { flag: "nf", text: "Norfolk Island", value: "NF" },
    { flag: "mp", text: "Northern Mariana Islands", value: "MP" },
    { flag: "no", text: "Norway", value: "NO" },
    { flag: "om", text: "Oman", value: "OM" },
    { flag: "pk", text: "Pakistan", value: "PK" },
    { flag: "pw", text: "Palau", value: "PW" },
    { flag: "ps", text: "Palestinian Territory, Occupied", value: "PS" },
    { flag: "pa", text: "Panama", value: "PA" },
    { flag: "pg", text: "Papua New Guinea", value: "PG" },
    { flag: "py", text: "Paraguay", value: "PY" },
    { flag: "pe", text: "Peru", value: "PE" },
    { flag: "ph", text: "Philippines", value: "PH" },
    { flag: "pn", text: "Pitcairn", value: "PN" },
    { flag: "pl", text: "Poland", value: "PL" },
    { flag: "pt", text: "Portugal", value: "PT" },
    { flag: "pr", text: "Puerto Rico", value: "PR" },
    { flag: "qa", text: "Qatar", value: "QA" },
    { flag: "", text: "Reunion", value: "RE" },
    { flag: "", text: "Romania", value: "RO" },
    { flag: "", text: "Russian Federation", value: "RU" },
    { flag: "", text: "RWANDA", value: "RW" },
    { flag: "", text: "Saint Helena", value: "SH" },
    { flag: "", text: "Saint Kitts and Nevis", value: "KN" },
    { flag: "", text: "Saint Lucia", value: "LC" },
    { flag: "", text: "Saint Pierre and Miquelon", value: "PM" },
    { flag: "", text: "Saint Vincent and the Grenadines", value: "VC" },
    { flag: "", text: "Samoa", value: "WS" },
    { flag: "", text: "San Marino", value: "SM" },
    { flag: "", text: "Sao Tome and Principe", value: "ST" },
    { flag: "", text: "Saudi Arabia", value: "SA" },
    { flag: "", text: "Senegal", value: "SN" },
    { flag: "", text: "Serbia and Montenegro", value: "CS" },
    { flag: "", text: "Seychelles", value: "SC" },
    { flag: "", text: "Sierra Leone", value: "SL" },
    { flag: "", text: "Singapore", value: "SG" },
    { flag: "", text: "Slovakia", value: "SK" },
    { flag: "", text: "Slovenia", value: "SI" },
    { flag: "", text: "Solomon Islands", value: "SB" },
    { flag: "", text: "Somalia", value: "SO" },
    { flag: "", text: "South Africa", value: "ZA" },
    {
      flag: "",
      text: "South Georgia and the South Sandwich Islands",
      value: "GS",
    },
    { flag: "", text: "Spain", value: "ES" },
    { flag: "", text: "Sri Lanka", value: "LK" },
    { flag: "", text: "Sudan", value: "SD" },
    { flag: "", text: "Suriname", value: "SR" },
    { flag: "", text: "Svalbard and Jan Mayen", value: "SJ" },
    { flag: "", text: "Swaziland", value: "SZ" },
    { flag: "", text: "Sweden", value: "SE" },
    { flag: "", text: "Switzerland", value: "CH" },
    { flag: "", text: "Syrian Arab Republic", value: "SY" },
    { flag: "", text: "Taiwan, Province of China", value: "TW" },
    { flag: "", text: "Tajikistan", value: "TJ" },
    { flag: "", text: "Tanzania, United Republic of", value: "TZ" },
    { flag: "", text: "Thailand", value: "TH" },
    { flag: "", text: "Timor-Leste", value: "TL" },
    { flag: "", text: "Togo", value: "TG" },
    { flag: "", text: "Tokelau", value: "TK" },
    { flag: "", text: "Tonga", value: "TO" },
    { flag: "", text: "Trinidad and Tobago", value: "TT" },
    { flag: "", text: "Tunisia", value: "TN" },
    { flag: "", text: "Turkey", value: "TR" },
    { flag: "", text: "Turkmenistan", value: "TM" },
    { flag: "", text: "Turks and Caicos Islands", value: "TC" },
    { flag: "", text: "Tuvalu", value: "TV" },
    { flag: "", text: "Uganda", value: "UG" },
    { flag: "", text: "Ukraine", value: "UA" },
    { flag: "", text: "United Arab Emirates", value: "AE" },
    { flag: "", text: "United Kingdom", value: "GB" },
    { flag: "", text: "United States", value: "US" },
    { flag: "", text: "United States Minor Outlying Islands", value: "UM" },
    { flag: "", text: "Uruguay", value: "UY" },
    { flag: "", text: "Uzbekistan", value: "UZ" },
    { flag: "vu", text: "Vanuatu", value: "VU" },
    { flag: "ve", text: "Venezuela", value: "VE" },
    { flag: "vn", text: "Viet Nam", value: "VN" },
    { flag: "vg", text: "Virgin Islands, British", value: "VG" },
    { flag: "vi", text: "Virgin Islands, U.S.", value: "VI" },
    { flag: "wf", text: "Wallis and Futuna", value: "WF" },
    { flag: "eh", text: "Western Sahara", value: "EH" },
    { flag: "ye", text: "Yemen", value: "YE" },
    { flag: "zm", text: "Zambia", value: "ZM" },
    { flag: "zw", text: "Zimbabwe", value: "ZW" },
  ];
  const nextpage = () => {
    if (personaldetailsform.name == "") {
      document.getElementById("valid_user").style.display = "block";
      setTimeout(() => {
        document.getElementById("valid_user").style.display = "none";
      }, 3000);
    } else if (personaldetailsform.gender == "") {
      document.getElementById("valid_gender").style.display = "block";
      setTimeout(() => {
        document.getElementById("valid_gender").style.display = "none";
      }, 3000);
    } else if (personaldetailsform.country == "") {
      document.getElementById("valid_country").style.display = "block";
      setTimeout(() => {
        document.getElementById("valid_country").style.display = "none";
      }, 3000);
    } else if (personaldetailsform.state == "") {
      document.getElementById("valid_state").style.display = "block";
      setTimeout(() => {
        document.getElementById("valid_state").style.display = "none";
      }, 3000);
    } else if (personaldetailsform.phone == "") {
      document.getElementById("valid_phone").style.display = "block";
      setTimeout(() => {
        document.getElementById("valid_phone").style.display = "none";
      }, 3000);
    } else {
      selectfun(2);
      localStorage.setItem(
        "personaldetails",
        JSON.stringify(personaldetailsform)
      );
    }
  };
  return (
    <div class="container-sm pt-3" style={{ width: "40rem" }}>
      <h1>Add your personal details</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div class="card text-left card_custom">
        <div class="card-body">
          <div>
            <div class="form-group">
              <label for="exampleFormControlInput1 ">Full Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                value={personaldetailsform.name}
                onChange={(e) =>
                  setpersonaldetailsform({
                    ...personaldetailsform,
                    name: e.target.value,
                  })
                }
                required
              />
              <div
                id="valid_user"
                className="invalid"
                style={{ display: "none" }}>
                Please enter user name.
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Gender</label>
              <div class="custom-choose mb-3">
                <input
                  type="radio"
                  id="opt-1"
                  value="Male"
                  name="gender"
                  onChange={(e) =>
                    setpersonaldetailsform({
                      ...personaldetailsform,
                      gender: e.target.value,
                    })
                  }
                />
                <label for="opt-1">Male</label>
                <input
                  type="radio"
                  id="opt-2"
                  value="Female"
                  name="gender"
                  onChange={(e) =>
                    setpersonaldetailsform({
                      ...personaldetailsform,
                      gender: e.target.value,
                    })
                  }
                />
                <label for="opt-2">Female</label>
                <input
                  type="radio"
                  id="opt-3"
                  value="Other"
                  name="gender"
                  onChange={(e) =>
                    setpersonaldetailsform({
                      ...personaldetailsform,
                      gender: e.target.value,
                    })
                  }
                />
                <label for="opt-3">Other</label>
              </div>
              <div
                id="valid_gender"
                className="invalid"
                style={{ display: "none" }}>
                Please select the gender.
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Country</label>
              <Dropdown
                placeholder="Select Country"
                fluid
                search
                selection
                options={country}
                value={personaldetailsform.country}
                onChange={handleChange}
              />
              <div
                id="valid_country"
                className="invalid"
                style={{ display: "none" }}>
                Please select the country.
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">State</label>
              <select
                class="form-control"
                value={personaldetailsform.state}
                onChange={(e) =>
                  setpersonaldetailsform({
                    ...personaldetailsform,
                    state: e.target.value,
                  })
                }>
                <option>Select State</option>
                {listcountry.length > 0 &&
                  listcountry.map(function (item, indx) {
                    return <option value={item.name}>{item.name}</option>;
                  })}
              </select>
              <div
                id="valid_state"
                className="invalid"
                style={{ display: "none" }}>
                Please select the state.
              </div>
            </div>
            <div class="form-group inputwidth">
              <label for="exampleFormControlSelect1">Phone</label>
              <PhoneInput
                country={personaldetailsform.country.toLowerCase()}
                value={personaldetailsform.phone}
                onChange={(value) =>
                  setpersonaldetailsform({
                    ...personaldetailsform,
                    phone: value,
                  })
                }
              />
              <div
                id="valid_phone"
                className="invalid"
                style={{ display: "none" }}>
                Please select the phone.
              </div>
            </div>
            <button
              className={
                "next-btn " +
                (personaldetailsform.name !== "" &&
                personaldetailsform.gender !== "" &&
                personaldetailsform.country !== "" &&
                personaldetailsform.state !== "" &&
                personaldetailsform.phone !== ""
                  ? "enable_btn"
                  : "disable_btn")
              }
              onClick={(e) => nextpage(e)}>
              Next
            </button>
          </div>
          <div className="text-center pt-3">
            <p>
              Already have an account?{" "}
              <span className="text_color">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personaldetails;
