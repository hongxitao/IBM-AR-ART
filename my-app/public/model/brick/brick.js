const bricks = {
  "brick": [
    {
      "id": 1,
      "level": 0,
      "startGrid": 0,
      "size": 2,
      "text": "multi-cluster management",
      "introduction": `With the IBM Cloud Pak® for Multicloud Management console and CLI tools, 
      you can view information about your clusters, 
      add or change cluster labels, and view metering usage data.`,
      "link": "https://www.ibm.com/docs/en/cloud-paks/cp-management/2.2.x?topic=cluster-management"
    },
    {
      "id": 2,
      "level": 0,
      "startGrid": 2,
      "size": 2,
      "text": "red hat openshift",
      "introduction": `With Red Hat OpenShift on IBM Cloud, OpenShift developers have 
      a fast and secure way to containerize and deploy enterprise workloads in Kubernetes clusters`,
      "link": "https://www.ibm.com/uk-en/cloud/openshift"
    },
    {
      "id": 3,
      "level": 0,
      "startGrid": 4,
      "size": 2,
      "text": "Red Hat Enterprise Linux",
      "introduction": `Red Hat Enterprise Linux is the intelligent operating system that is 
      the consistent foundation for
       open hybrid cloud and provides the tools needed to deliver critical services and
        workloads faster and with less effort`,
      "link": "https://www.redhat.com/en/resources/ibmz-linuxone-add-on-datasheet"
    },
    {
      "id": 4,
      "level": 1,
      "startGrid": 0,
      "size": 1,
      "text": "Modernize Toolkit",
      "introduction": `Whether you are modernizing your existing enterprise applications, migrating VMware workloads,
       comply with financial industry regulations or rebuilding as microservices, you benefit from
        our experience in helping industry-leading companies integrate and secure apps across their environments.`,
      "link": "https://www.ibm.com/uk-en/cloud/application-modernization"
    },
    {
      "id": 5,
      "level": 1,
      "startGrid": 1,
      "size": 1,
      "text": "API LifeCycle",
      "introduction": `The API lifecycle management architecture bridges the gap between cloud and on-premises applications quickly and easily. 
      It allows customers to securely unlock existing IT assets and to deliver innovative applications with modern architectures.`,
      "link": "https://www.ibm.com/cloud/architecture/architectures/apiArchitecture/"
    },
    {//TODO what is the difference between analyze and analytics?
      "id": 6,
      "level": 1,
      "startGrid": 2,
      "size": 1,
      "text": "Analyze",
      "introduction": "Analytics services on the IBM Cloud® can be deployed in the cloud, on premises or in a hybrid environment.",
      "link": "https://www.ibm.com/cloud/analytics"
    },
    {
      "id": 7,
      "level": 1,
      "startGrid": 3,
      "size": 1,
      "text": "Infra structure",
      "introduction": `Move your existing on-premises Java™ applications to the cloud in minutes, with IBM WebSphere® Application Server on Cloud.`,
      "link": "https://www.ibm.com/middleware/uk-en/solutions/application-platform/application-infrastructure.html"
    },
    {
      "id": 8,
      "level": 1,
      "startGrid": 4,
      "size": 1,
      "text": "Incident Response",
      "introduction": `Intelligent orchestration bolsters incident response by defining repeatable processes, empowering skilled analysts and leveraging integrated technologies, enabling the organization to detect and respond quickly to cyberthreats. `,
      "link": "https://www.ibm.com/uk-en/security/incident-response"
    },
    {
      "id": 9,
      "level": 1,
      "startGrid": 5,
      "size": 1,
      "text": "Cloud Pak Automate",
      "introduction": `IBM Cloud Pak for Business Automation is a modular set of integrated software components, built for any hybrid cloud, designed to automate work and accelerate business growth.`,
      "link": "https://www.ibm.com/uk-en/cloud/cloud-pak-for-business-automation"
    },
    {
      "id": 10,
      "level": 2,
      "startGrid": 0,
      "size": 1,
      "text": "Quantum",
      "introduction": `IBM Quantum leads the world in quantum computing. This nascent technology is widely expected to solve valuable problems that today’s most powerful classical supercomputers cannot solve and never will.`,
      "link": "https://www.ibm.com/quantum"
    },
    {
      "id": 11,
      "level": 2,
      "startGrid": 1,
      "size": 1,
      "text": "Analytics",
      "introduction": `IBM Cloud solutions, featuring embedded intelligence capabilities through machine learning (ML), enable you to easily analyze the data and build ML models that can be deployed in cognitive applications.`,
      "link": "https://www.ibm.com/uk-en/analytics"
    },
    {
      "id": 12,
      "level": 2,
      "startGrid": 2,
      "size": 1,
      "text": "Security",
      "introduction": `Achieve continuous security for your enterprise applications and workloads with built-in isolation, access management and integrated security posture.`,
      "link": "https://www.ibm.com/uk-en/cloud/security#:~:text=IBM%20has%20a%20long%2Dstanding,in%20motion%20and%20in%20use."
    },
    {
      "id": 13,
      "level": 2,
      "startGrid": 3,
      "size": 1,
      "text": "AI",
      "introduction": `IBM AI processes key insights, patterns and relationships across unstructured images, emails, social media and more.`,
      "link": "https://www.ibm.com/uk-en/cloud/ai"
    },
    {
      "id": 14,
      "level": 2,
      "startGrid": 4,
      "size": 1,
      "text": "Watson",
      "introduction": `IBM’s portfolio of business-ready tools, applications and solutions, designed to reduce the costs and hurdles of AI adoption while optimizing outcomes and responsible use of AI.`,
      "link": "https://www.ibm.com/uk-en/watson"
    },
    {
      "id": 15,
      "level": 2,
      "startGrid": 5,
      "size": 1,
      "text": "IoT",
      "introduction": `The Internet of Things (IoT) is the billions of physical devices around the world 
      that are now connected to the internet, all collecting and sharing data.
      By combining IoT data with IBM Cloud, business can extract valuable insights 
      to improve virtually every aspect of their operations and enable innovative, new business models.`,
      "link": "https://www.ibm.com/uk-en/cloud/internet-of-things"
    },
    {
      "id": 16,
      "level": 3,
      "startGrid": 0,
      "size": 1.5,
      "text": "Management Services",
      "introduction": `IBM® Essential Management is a managed services offering from IBM Expert Labs that provides access to product experts who manage your IBM software and applications.`,
      "link": "https://www.ibm.com/products/expertlabs/managed-services"
    },
    {
      "id": 17,
      "level": 3,
      "startGrid": 1.5,
      "size": 1.5,
      "text": "Development Services",
      "introduction": `IBM provides cloud native development assisted with reference architectures,
       tools and accelerators, virtual delivery models, and industry solutions, which deliver faster time to market, higher scalability
       , simpler management and reduce cost through containerization, microservices, automation and DevOps practices.`,
      "link": "https://www.ibm.com/uk-en/consulting/application-development"
    },
    {
      "id": 18,
      "level": 3,
      "startGrid": 3,
      "size": 1.5,
      "text": "Migration Services",
      "introduction": `IBM Cloud Migration help you migrate for digital transformation supporting 
      mass, image, data, storage & application migration and database rehosting.`,
      "link": "https://www.ibm.com/consulting/cloud-migration"
    },
    {
      "id": 19,
      "level": 3,
      "startGrid": 4.5,
      "size": 1.5,
      "text": "Strategy Services",
      "introduction": `Leveraging IBM's years of experience and cross-industry expertise in business transformation, 
      we offer a range of consulting services across domains, including finance, procurement, 
      supply chain, operations, customer experience, digital marketing strategy and talent 
      — all underpinned by data and technology.`,
      "link": "https://www.ibm.com/services/business"
    },
    {
      "id": 20,
      "level": 4,
      "startGrid": 0,
      "size": 1,
      "text": "AI Apps",
      "introduction": `Using Prebuilt IBM AI applications to
      get deep insights from your data, interact with customers and employees on their terms,
      and train your AI systems on the language of your industry.`,
      "link": "https://www.ibm.com/watson/products-services"
    },
    {
      "id": 21,
      "level": 4,
      "startGrid": 1,
      "size": 1,
      "text": "Innovation Studio",
      "introduction": `Studio are a network of studios around the world that focuses
       on getting our clients and business partners to their next step, faster. 
      We do this by bringing together the best of IBM’s expertise and experiences to drive progress.`,
      "link": "https://www.ibm.com/about/innovation-studio"
    },
    {
      //Duplicate Block, remember to change another one if change this
      "id": 22,
      "level": 4,
      "startGrid": 2,
      "size": 1,
      "text": "Ecosystem Apps",
      "introduction": `With IBM and Red Hat, Independent Software Vendors can manage and integrate solutions seamlessly across multiple clouds`,
      "link": "https://www.ibm.com/partnerworld/cloud/ecosystem"
    },
    {
      //TODO not a very great match
      //TODO duplication block, remember to change another one if change this one
      "id": 23,
      "level": 4,
      "startGrid": 3,
      "size": 1,
      "text": "Data",
      "introduction": `Data science combines math and statistics, specialized programming, advanced analytics, 
      artificial intelligence (AI), and machine learning with specific subject matter expertise to uncover
      actionable insights hidden in an organization’s data. 
      These insights can be used to guide decision making and strategic planning.`,
      "link": "https://www.ibm.com/cloud/learn/data-science-introduction"
    },
    {
      "id": 24,
      "level": 4,
      "startGrid": 4,
      "size": 1,
      "text": "Apps",
      "introduction": `You can build enterprise-ready mobile and web applications in IBM Cloud® 
      and take advantage of cloud extensions providing by IBM Cloud. 
       Create an app with a starter kit that manages the process for you, 
       or if you know what you want, start from scratch and build your app with the resources you need. 
       Or, use your existing repository and bring your own code.`,
      "link": "https://cloud.ibm.com/docs/apps?topic=apps-getting-started"
    },
    {
      //duplication block, remember to change another one if change this
      "id": 25,
      "level": 4,
      "startGrid": 5,
      "size": 1,
      "text": "Data",
      "introduction": `Data science combines math and statistics, specialized programming, advanced analytics, 
      artificial intelligence (AI), and machine learning with specific subject matter expertise to uncover
      actionable insights hidden in an organization’s data. 
      These insights can be used to guide decision making and strategic planning.`,
      "link": "https://www.ibm.com/cloud/learn/data-science-introduction"
    }, {
      "id": 27,
      "level": 5,
      "startGrid": 1,
      "size": 2,
      "text": "Digital Transformation",
      "introduction": `96% of leaders say the pandemic will speed their digital transformation by an average of 5.3 years. 
      Adopt digital technologies that help you re-engineer, automate and infuse intelligence across key business functions now`,
      "link": "https://www.ibm.com/uk-en/smarter-business"
    }, {
    //TODO not a very good match
      "id": 28,
      "level": 5,
      "startGrid": 3,
      "size": 2,
      "text": "Business Transformation",
      "introduction": `Through our end-to-end collaborative engagement model, 
      rapidly convert your ideas into business value with a unique methodology that curates industry best practices 
      layered with the depth of experience only IBM can bring.`,
      "link": "https://www.ibm.com/uk-en/smarter-business"
    }, {
      //Duplicate Block, remember to change another one if change this
      "id": 29,
      "level": 6,
      "startGrid": 2,
      "size": 1,
      "text": "Ecosystem Applications",
      "introduction": `With IBM and Red Hat, Independent Software Vendors can manage and integrate solutions seamlessly across multiple clouds`,
      "link": "https://www.ibm.com/partnerworld/cloud/ecosystem"
    }
  ]
};

//TODO auto check if the link is correct
