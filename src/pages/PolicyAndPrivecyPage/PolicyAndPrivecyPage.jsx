import css from "./PolicyAndPrivecyPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { useNavigate } from "react-router-dom";

const PolicyAndPrivecyPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className={css.top_container}>
        <GoBackButton
          // to="/setting"
          imgWidth="50px"
          imgHeight="50px"
          imgAlt="Go back"
          title=" Privacy policy"
          onClick={handleBack}
        />
      </div>

      <div className={css.policy_container}>
        <h2 className={`${css.title} dark:text-white`}>
          Privacy policy and security of personal data
        </h2>
        <p className={`${css.descr} dark:text-white`}>
          We are a team of enthusiasts who have created this app with the aim of
          making the search for courses and the placement of advertisements as
          convenient and efficient as possible for users. Our mission is to
          connect those seeking knowledge with those who provide it.
        </p>
        <h2 className={`${css.title} dark:text-white`}>
          Collection and processing of information.
        </h2>
        <ul>
          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              {" "}
              1.1 Registration information:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              Once registered, users may view and modify their account
              information at any time by logging into the NOLA system or
              contacting Customer Support. It is the user's responsibility to
              maintain the accuracy of their account information. If their email
              address changes, it is their responsibility to ensure that this is
              updated in their account.
              <span className={css.empty_str}></span>
              When a user creates an account, the NOLA service collects the
              following registration information about the user:
              <li> - Login </li>
              <li>- Username</li>
              <li>- Email address</li>
              <li> - Password </li>
              <li>- Mobile phone number</li>
              <li>
                - Login credentials that the user connects to his/her NOLA
                account (these can be Google and Facebook accounts).
              </li>
              <span className={css.empty_str}></span>
              We strongly recommend that users exercise caution when disclosing
              personal information. It is not advisable to post personal
              information, such as personal email addresses, URLs, instant
              messaging data, telephone numbers, full names or addresses, credit
              card information, and other sensitive information that could be
              subject to abuse or misuse, on your profile.
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              {" "}
              1.2 Content Moderation:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              The NOLA service employs a combination of automated systems and a
              team of moderators to monitor and review accounts and posts
              (including creative materials and text) for content that may be in
              violation of our Terms of Use. If a user's account or post does
              not meet certain criteria that demonstrate a potential violation
              of the Terms of Use, the account or post in question will receive
              a warning and the user's access to their account or post will be
              restricted and/or blocked. Affected users may contact the NOLA
              Service Administration to appeal this decision.
              <span className={css.empty_str}></span>
              In the event that a user publishes content that does not comply
              with the NOLA Terms of Service, the administration reserves the
              right to terminate or restrict the user's access to their account.
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              1.3 Purchase Information:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              Should a user elect to purchase any of the promotion services, the
              NOLA service will process the user's payment information and
              securely store it for fraud prevention and audit/tax purposes.
              <span className={css.empty_str}></span>
              The NOLA service employs automated solutions to prevent fraudulent
              payment transactions, which are processed as part of its
              anti-fraud procedures.
              <span className={css.empty_str}></span>
              In the event that a transaction meets certain criteria indicating
              a potential violation of the Terms of Use and is deemed likely to
              be fraudulent, the transaction may be automatically blocked. In
              such instances, the user will be promptly notified that their
              transaction cannot be processed. Affected users may then contact
              the NOLA Service Administration to appeal this decision.
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              1.4 Customer Service:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              When users contact Customer Support, the NOLA service may, if
              necessary, collect personal information in order to fulfill the
              user's request and receive feedback. The NOLA service may also
              contact the user using the existing account contact information
              provided for this purpose.
              <span className={css.empty_str}></span>
              The NOLA service may also collect other information about
              communication with users, such as any customer support requests
              submitted by users or any feedback provided by them, in particular
              in the form of reviews left by users. Feedback will be processed
              as data relating to the user who wrote the feedback and the user
              in respect of whom the feedback was left.
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              1.5 Information about links:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              The NOLA service may track how a user interacts with links
              available on the NOLA service, including third-party services,
              through click-through or other means. The NOLA service may share
              general click-stream statistics, such as how many times a
              particular link has been clicked or how many times a particular
              post has been viewed.
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              1.6 Processing of Personal Data by Third Parties:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              Please be aware that when clicking on certain links posted on the
              NOLA service, advertisements, or in the mobile application, you
              may be redirected to sites (with applications, etc.) of other
              companies outside the hosting space of the NOLA service, where
              information about users is collected outside the direct control of
              the NOLA service. In such instances, the Security Policies and
              Privacy Policies of third-party websites and/or applications will
              govern the processing of information received from users by these
              third parties.
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              1.7 Website and mobile data:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              The NOLA service may automatically receive and record information
              from the user's browser, or any device, using technologies such as
              cookies, pixels, and local storage (both in the user's browser or
              mobile device), including the user's IP address, geolocation,
              software and hardware attributes, pages requested by the user,
              data contained in browser databases, including SQL databases,
              mobile identifiers (including mobile device identifiers such as
              Google Advertisement ID, IFA or IFV), information about
              application usage and/or information about other devices used, or
              system-level information. This may take place on the NOLA website,
              or on the mobile application, or on third-party services.
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              1.8 Information about surveys:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              From time to time, the administration of the NOLA service conducts
              surveys for research purposes. These surveys may be conducted by
              contacting the user to ascertain whether the user wishes to
              participate. The NOLA service administration may also contact the
              user to find out if the user wishes to provide feedback or
              participate in marketing campaigns. Such surveys and marketing
              campaigns are optional, and more information will be provided at
              the point of contact. If the user does not wish to be contacted to
              participate in a survey or marketing campaign, they can contact
              Customer Support via the chat-bot or feedback form and request to
              opt out.
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              1.9 Information received as a result of surveys:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              The NOLA service may collect and store information obtained
              through surveys that may be conducted by the NOLA service itself
              or by third-party contractors engaged by the NOLA service. This
              information may include, but is not limited to, information about
              gender, age, marital status, personal preferences, etc.
              <span className={css.empty_str}></span>
              The NOLA service collects information about the ratings and
              reviews that users provide to other users, as well as the ratings
              and reviews that users receive from other users, in accordance
              with the NOLA service Terms of Use. This data is used to measure
              user satisfaction with the appropriate content in accordance with
              the Terms of Use, as well as to identify and prevent undesirable
              activities and behaviors in the context of activities carried out
              on the NOLA service. This information allows the NOLA service
              administration to take the necessary and appropriate measures to
              maintain high standards in the provision of services.
              <span className={css.empty_str}></span>
              When a user contacts us through Customer Support, the user may
              communicate with a chat-bot, a member of the NOLA team, or a
              private service expert who is the same user, selected and agreed
              upon by the NOLA service. Each of these individuals is properly
              verified to initiate the conversation. The NOLA service may
              process and share information that the user chooses to share while
              using this feature in order to provide better customer service.
            </p>
          </li>
        </ul>

        <h2 className={`${css.title} dark:text-white`}>
          2. Use of personal data
        </h2>
        <ul>
          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              2.1 Purposes of storage and placement of personal data:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              To provide its services, the NOLA service may use information that
              is collected and placed for the following purposes:
              <li>
                - Providing customer service, including for creating and
                managing user accounts, resolving technical difficulties and
                accessing various functions;
              </li>
              <li>
                - Tailoring offers and experiences, including advertising on its
                services or those of third parties;
              </li>
              <li>
                - Monitoring general and individual user activity, such as
                keyword searches, ad posting activity, and traffic management on
                the NOLA service;
              </li>
              <li>
                - Communicating with users, including for service, customer
                service or authorized marketing communications through any
                available communication channels;
              </li>
              <li>
                - Conducting research and analytical activities to improve the
                service;
              </li>
              <li>
                - Ensuring compliance with the NOLA User Agreement, including
                fraud and abuse prevention;
              </li>
              <li>
                - Evaluating certain factors of personal information, in
                particular, to analyze and predict personal preferences,
                interests, behavior and location.
              </li>
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              2.2 Retention of Personal Data:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              The NOLA Service will retain the user's personal information for
              as long as necessary to fulfill the purposes for which it was
              collected, including to comply with any legal, accounting, or
              reporting requirements.
              <span className={css.empty_str}></span>
              To determine the appropriate retention period, NOLA will consider
              the amount, nature and sensitivity of the personal information,
              the potential risk of harm from unauthorized use or disclosure of
              the user's personal information, the purposes for which NOLA
              processes personal information and whether NOLA can achieve those
              purposes by other means, and relevant legal requirements.
              <span className={css.empty_str}></span>
              If there has been no activity in the user's account for more than
              24 months, the NOLA service administration reserves the right to
              delete the account, including all personal data stored in the
              account, which means that the user will no longer be able to
              access and use it in the future.
            </p>
          </li>
        </ul>

        <h2 className={`${css.title} dark:text-white`}>
          3. Information exchange
        </h2>

        <ul>
          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              3.1 Purposes of information exchange:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              The NOLA Service reserves the right, as required by law, to share
              information with individuals and government agencies for the
              following purposes:
              <li>- Combating fraud and abuse of the NOLA Service;</li>
              <li>
                - Investigating alleged violations of the law or combating any
                other alleged violations of the NOLA Service User Agreement by
                users;
              </li>
              <li>
                - Understanding what advertisements or services may be of
                interest to users, improving the overall quality and
                effectiveness of the services on the NOLA Service, or to provide
                its contribution to scientific research that NOLA believes may
                be of great social benefit
              </li>
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              3.2 Parties of information exchange:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              The NOLA Service may provide personal data of Users at the request
              of the competent authorities, executed in accordance with the
              requirements of the current legislation, including in accordance
              with Article 93 of the Criminal Procedure Code of Ukraine.
              <span className={css.empty_str}></span>
              NOLA Service may transfer the collected data to third parties
              providing services to NOLA Service for the purpose of conducting
              research or providing services to users. In this case, the
              information transferred will be subject to this Privacy and
              Security Policy, and the third parties involved will have no right
              to use the information received other than to provide the NOLA
              Service.
              <span className={css.empty_str}></span>
              The NOLA Service may share certain anonymized information (data
              that does not allow users to be individually identified) with
              third-party service providers, trusted partners, or authorized
              researchers.
            </p>
          </li>

          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              3.3 Informing the user of the transfer of information:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              In the case of the transfer of personal data provided for in the
              current section of the Privacy and Security Policy, informing the
              user of the transfer of his personal data remains at the
              discretion of the NOLA Service Administration.
            </p>
          </li>
        </ul>

        <h2 className={`${css.title} dark:text-white`}>4. User control</h2>

        <ul>
          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              4.1 Access, Correction and Deletion:
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              Users who have created an account or posted an advertisement on
              the NOLA Service may access, correct or delete the information
              they have provided. The User is responsible for the accuracy of
              the information provided. If the User's account was created
              through an identification provider (e.g., Facebook Connect), the
              User may also deactivate or change the account information through
              the provider's identification settings (e.g., at facebook.com).
              The posted information can be changed or deleted in the user's
              personal account on the corresponding page of the NOLA Service
              account or in the Application. The NOLA Service may stop
              processing the User's personal data upon receipt of a written
              notice from the User about the withdrawal of consent to the
              processing of personal data.
              <span className={css.empty_str}></span>
              In order to delete the user's personal data, it is necessary to
              send a request to the NOLA Service administration via chat-bo or a
              request via feedback with a notice of withdrawal of consent to the
              processing of personal data. The Administration will delete the
              User's data no later than ten (10) calendar days from the date of
              receipt of all necessary information from the User.{" "}
              <span className={css.empty_str}></span>
              Warning: Even after the user deletes information from his/her
              profile or deletes his/her account, copies of this information may
              still be available for viewing and/or access if this information
              was previously provided to, copied, or stored by other persons.
              The administration of the NOLA Service cannot control this and is
              not responsible for it. If the User has provided access to his/her
              personal information to third party applications or websites, they
              may store such information to the extent permitted by their terms
              of service or privacy policy.
            </p>
          </li>
        </ul>

        <h2 className={`${css.title} dark:text-white`}>
          5. Receiving services from third-party services
        </h2>

        <ul>
          <li>
            <h3 className={`${css.list_title} dark:text-white`}>
              5.1 Service providers
            </h3>
            <p className={`${css.descr} dark:text-white`}>
              The administration of the NOLA service engages certain trusted
              third parties to perform certain functions and provide services.
              The providers with whom the NOLA service shares users' personal
              data depend on various factors. For example, the following
              providers are typically used to provide services to NOLA users:
              <li>
                - Billing services - to allow customers to purchase paid
                features of the NOLA service;
              </li>
              <li>
                - Authentication services - to allow customers to authenticate
                their account (e.g., Google);
              </li>
              <li>
                - Social media providers - to allow customers to create/connect
                their NOLA account to their accounts on such platforms (e.g.,
                Facebook or Instagram);
              </li>
              <li>
                - Product development and market research - to use third-party
                platforms and agencies to conduct customer surveys and market
                research to improve NOLA's products and services;
              </li>
              <li>
                - Marketing services for growth - in order to be able to sell
                and advertise the NOLA service to potential customers (for
                example, on Facebook).
              </li>
              <span className={css.empty_str}></span>
              The NOLA Service Administration conducts due diligence on all
              service providers to ensure that they have adequate data
              protection and information security measures in place and provides
              them with only the personal data necessary to provide the services
              they provide.
            </p>
          </li>
        </ul>

        <h2 className={`${css.title} dark:text-white`}>
          6. Changes to this policy
        </h2>

        <ul>
          <li>
            <p className={`${css.descr} dark:text-white`}>
              This privacy and security policy for personal data was last
              updated on XX.XX.2024. The Company may update this Privacy and
              Security Policy from time to time. The new version of the Privacy
              and Security Policy comes into force from the moment it is posted
              on the Internet at the specified address ***link***, unless
              otherwise provided by the new version of the Privacy and Security
              Policy.
              <span className={css.empty_str}></span>
              If the administration of the NOLA service has made any changes to
              the Privacy and Security Policy of personal data with which the
              user does not agree, he is obliged to stop using the NOLA service.
              The fact of continuing to use the NOLA service is a confirmation
              of the user's consent and acceptance of the relevant version of
              the Privacy and Security Policy.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PolicyAndPrivecyPage;
