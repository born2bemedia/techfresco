const services = {
  cloud_services: {
    number: "01",
    title: "Cloud Services",
    slug: "cloud-services",
    excerpt: "Selecting scalable cloud solutions for your business needs.",
    advantages: [
      "Migration",
      "Management",
      "Optimisation",
      "Migration",
      "Management",
      "Optimisation",
      "Migration",
      "Management",
      "Optimisation",
    ],
    categoriesTitle: "Instant Cloud Services",
    categories: [
      {
        number: "01",
        title: "Cloud Migration",
        description:
          "Seamlessly transfer your data and applications to the cloud with minimal downtime.",
      },
      {
        number: "02",
        title: "Infrastructure Management",
        description:
          "Ongoing cloud infrastructure maintenance and monitoring to ensure optimal performance.",
      },
      {
        number: "03",
        title: "Cloud Security",
        description:
          "Protect your cloud environment with advanced security measures and threat detection.",
      },
      {
        number: "04",
        title: "Cloud Optimisation",
        description:
          "Enhance the efficiency and performance of your cloud through regular adjustments.",
      },
    ],
    plans: [
      {
        planName: "Basic Plan",
        features: [
          "<b>Cloud Migration:</b> up to 5 virtual machines or 10 applications.",
          "<b>Basic Management:</b> Includes monitoring and maintenance.",
          "<b>Support:</b> 8/5 support (8 hours a day, 5 days a week).",
        ],
        price: "from <span>4000 EUR</span>",
      },
      {
        planName: "Standard Plan",
        features: [
          "<b>Cloud Migration:</b> Migration of up to 10 virtual machines or 20 applications.",
          "<b>Advanced Management:</b> Includes monitoring, maintenance, and basic security.",
          "<b>Security Features:</b> Basic firewall and threat detection.",
          "<b>Support:</b> 12/5 support (12 hours a day, 5 days a week).",
        ],
        price: "from <span>5000 EUR</span>",
      },
      {
        planName: "Premium Plan",
        features: [
          "<b>Cloud Migration:</b> unlimited virtual machines or applications.",
          "<b>Comprehensive Management:</b> Includes advanced monitoring, maintenance, and security.",
          "<b>Advanced Security Features:</b> Advanced firewall, threat detection, and mitigation.",
          "<b>Performance Optimization:</b> Regular performance reviews and optimization.",
          "<b>Support:</b> 24/7 support.",
        ],
        price: "from <span>6500 EUR</span>",
      },
    ],
  },
  network_security: {
    number: "02",
    title: "Network Security",
    slug: "network-security",
    excerpt:
      "Protecting your network from threats, breaches, occasional and intentional data leaks.",
    advantages: [
      "Firewall Protection",
      "IDPS",
      "VPN",
      "Audits",
      "Firewall Protection",
      "IDPS",
      "VPN",
      "Audits",
      "Firewall Protection",
      "IDPS",
      "VPN",
      "Audits",
    ],
    categoriesTitle: "Instant Network Security Services",
    categories: [
      {
        number: "01",
        title: "Firewall Protection",
        description:
          "Implementation and management of firewalls to block unauthorized access and threats.",
      },
      {
        number: "02",
        title: "Intrusion Detection and Prevention Systems",
        description:
          "Monitoring and blocking malicious activities on your network.",
      },
      {
        number: "03",
        title: "VPN Setup",
        description:
          "Secure remote access to your network for employees working from different locations.",
      },
      {
        number: "04",
        title: "Endpoint Protection",
        description:
          "Securing computers and mobile devices from malware and cyber threats.",
      },
      {
        number: "05",
        title: "Security Audits",
        description:
          "Comprehensive reviews of your network security to identify and address vulnerabilities.",
      },
      {
        number: "06",
        title: "Incident Response",
        description:
          "Rapid response to security breaches to minimize damage and restore normal operations.",
      },
    ],
    plans: [
      {
        planName: "Basic Plan",
        features: [
          "<b>Firewall Protection:</b> Basic firewall setup and management.",
          "<b>Endpoint Protection:</b> Coverage for up to 10 devices.",
          "<b>Security Audits:</b> Quarterly reviews.",
          "<b>Support:</b> Business hours support (9 AM - 5 PM).",
        ],
        price: "from <span>6000 EUR</span>",
      },
      {
        planName: "Standard Plan",
        features: [
          "<b>Firewall Protection:</b> Advanced firewall configuration with ongoing management.",
          "<b>Intrusion Detection and Prevention Systems (IDPS):</b> Basic threat monitoring and blocking.",
          "<b>Endpoint Protection:</b> Coverage for up to 25 devices.",
          "<b>Security Audits:</b> Monthly reviews.",
          "<b>VPN Setup:</b> Configuration for remote access.",
          "<b>Support:</b> Extended support (9 AM - 9 PM).",
        ],
        price: "from <span>7500 EUR</span>",
      },
      {
        planName: "Premium Plan",
        features: [
          "<b>Firewall Protection:</b> Comprehensive firewall setup with advanced security features.",
          "<b>Intrusion Detection and Prevention Systems (IDPS):</b> Advanced threat detection and prevention.",
          "<b>Endpoint Protection:</b> Coverage for unlimited devices.",
          "<b>Security Audits:</b> Weekly reviews.",
          "<b>VPN Setup:</b> Secure remote access for all employees.",
          "<b>Incident Response:</b> 24/7 response to security incidents.",
          "<b>Support:</b> 24/7 support.",
        ],
        price: "from <span>8500 EUR</span>",
      },
    ],
  },
  hardware_help: {
    number: "03",
    title: "Hardware Help",
    slug: "hardware-help",
    excerpt:
      "Assistance with installation, maintenance, and repair of hardware.",
    advantages: [
      "Installation",
      "Maintenance",
      "Diagnostics",
      "Installation",
      "Maintenance",
      "Diagnostics",
      "Installation",
      "Maintenance",
      "Diagnostics",
    ],
    categoriesTitle: "Instant Hardware Help Services",
    categories: [
      {
        number: "01",
        title: "Installation",
        description:
          "Setup and configuration of new hardware, including computers, servers, and peripherals.",
      },
      {
        number: "02",
        title: "Maintenance",
        description:
          "Regular check-ups and servicing recommendations to keep your hardware in optimal condition.",
      },
      {
        number: "03",
        title: "Upgrades",
        description:
          "Consulting on enhancements and updates to existing hardware to improve performance.",
      },
      {
        number: "04",
        title: "Diagnostics",
        description:
          "Detailed analysis of hardware problems to identify and resolve issues effectively.",
      },
    ],
    plans: [
      {
        planName: "Basic Plan",
        features: [
          "<b>Installation:</b> Setup of up to 5 devices.",
          "<b>Maintenance:</b> Quarterly check-ups and servicing consulting.",
          "<b>Support:</b> Business hours support (9 AM - 5 PM).",
        ],
        price: "from <span>2500 EUR</span>",
      },
      {
        planName: "Standard Plan",
        features: [
          "<b>Installation:</b> Setup of up to 10 devices.",
          "<b>Maintenance:</b> Bi-monthly check-ups and servicing.",
          "<b>Repair:</b> Includes up to 5 repair incidents per month.",
          "<b>Support:</b> Extended support (9 AM - 9 PM).",
        ],
        price: "from <span>4000 EUR</span>",
      },
      {
        planName: "Premium Plan",
        features: [
          "<b>Installation:</b> Unlimited device setup.",
          "<b>Maintenance:</b> Monthly check-ups and servicing.",
          "<b>Repair:</b> Unlimited repair incidents with priority service.",
          "<b>Upgrades:</b> Includes hardware upgrades and enhancements.",
          "<b>Support:</b> 24/7 support.",
        ],
        price: "from <span>5500 EUR</span>",
      },
    ],
  },
  cybersecurity: {
    number: "04",
    title: "Cybersecurity",
    slug: "cybersecurity",
    excerpt:
      "Consulting and implementation of security measures to safeguard your data.",
    advantages: [
      "Threat Detection",
      "Antivirus Solutions",
      "Security Audits",
      "Threat Detection",
      "Antivirus Solutions",
      "Security Audits",
      "Threat Detection",
      "Antivirus Solutions",
      "Security Audits",
    ],
    categoriesTitle: "Instant Cybersecurity Services",
    categories: [
      {
        number: "01",
        title: "Threat Detection",
        description:
          "Continuous monitoring to identify and respond to potential threats.",
      },
      {
        number: "02",
        title: "Firewall Management",
        description:
          "Configuration and management of firewalls to prevent unauthorized access.",
      },
      {
        number: "03",
        title: "Antivirus Solutions",
        description:
          "Installation and maintenance of antivirus software to protect against malware.",
      },
      {
        number: "04",
        title: "Security Audits",
        description:
          "Regular assessments to identify and address vulnerabilities in your security systems.",
      },
      {
        number: "05",
        title: "Incident Response",
        description:
          "Rapid response and resolution of security incidents to minimize damage.",
      },
      {
        number: "06",
        title: "Security Compliance",
        description:
          "Ensuring your cybersecurity practices meet industry standards and regulations.",
      },
    ],
    plans: [
      {
        planName: "Basic Plan",
        features: [
          "<b>Threat Detection:</b> Basic monitoring and alerts.",
          "<b>Firewall Management:</b> Setup and management of a standard firewall.",
          "<b>Antivirus Solutions:</b> Installation and maintenance for up to 10 devices.",
          "<b>Security Audits:</b> Quarterly audits.",
          "<b>Support:</b> Business hours support (9 AM - 5 PM).",
        ],
        price: "from <span>5000 EUR</span>",
      },
      {
        planName: "Standard Plan",
        features: [
          "<b>Threat Detection:</b> Advanced monitoring with real-time alerts.",
          "<b>Firewall Management:</b> Enhanced firewall configuration and management.",
          "<b>Antivirus Solutions:</b> Coverage for up to 25 devices.",
          "<b>Security Audits:</b> Monthly audits.",
          "<b>Incident Response:</b> Basic incident response service.",
          "<b>Compliance:</b> Assistance with standard compliance requirements.",
          "<b>Support:</b> Extended support (9 AM - 9 PM).",
        ],
        price: "from <span>6500 EUR</span>",
      },
      {
        planName: "Premium Plan",
        features: [
          "<b>Threat Detection:</b> Comprehensive monitoring with proactive threat management.",
          "<b>Firewall Management:</b> Advanced firewall setup and 24/7 management.",
          "<b>Antivirus Solutions:</b> Coverage for unlimited devices with advanced protection.",
          "<b>Security Audits:</b> Weekly audits and vulnerability assessments.",
          "<b>Incident Response:</b> 24/7 incident response with priority service.",
          "<b>Compliance:</b> Full compliance support and reporting.",
          "<b>Support:</b> 24/7 support.",
        ],
        price: "from <span>8000 EUR</span>",
      },
    ],
  },
  it_consulting: {
    number: "05",
    title: "Information Technology Consulting",
    slug: "it-consulting",
    excerpt:
      "Expert advice to optimise your IT strategy, infrastructure and local solutions.",
    advantages: [
      "Assessment",
      "Management",
      "Transformation",
      "Assessment",
      "Management",
      "Transformation",
      "Assessment",
      "Management",
      "Transformation",
    ],
    categoriesTitle: "Instant IT Consulting Services",
    categories: [
      {
        number: "01",
        title: "IT Strategy Development",
        description:
          "Crafting comprehensive IT strategies that align with your business objectives.",
      },
      {
        number: "02",
        title: "Technology Assessment",
        description:
          "Evaluating your current IT systems and identifying areas for improvement.",
      },
      {
        number: "03",
        title: "Digital Transformation",
        description:
          "Guiding your business through adopting new technologies and digital tools.",
      },
      {
        number: "04",
        title: "Project Management",
        description:
          "Overseeing IT projects from inception to completion, ensuring they meet timelines and budgets.",
      },
      {
        number: "05",
        title: "Vendor Management",
        description:
          "Assisting with selecting and managing IT vendors and service providers.",
      },
      {
        number: "06",
        title: "Risk Management",
        description:
          "Identifying and mitigating IT risks to safeguard your business operations.",
      },
      {
        number: "07",
        title: "Cost Optimization",
        description:
          "Analysis and optimization of your IT budget to ensure cost-effectiveness.",
      },
      {
        number: "08",
        title: "Compliance and Governance",
        description:
          "Ensuring your IT practices comply with industry regulations and standards.",
      },
    ],
    plans: [
      {
        planName: "Basic Plan",
        features: [
          "<b>IT Strategy Development:</b> Initial strategy session and basic plan development.",
          "<b>Technology Assessment:</b> One-time evaluation of your current IT systems.",
          "<b>Support:</b> Business hours support (9 AM - 5 PM).",
        ],
        price: "from <span>3000 EUR</span>",
      },
      {
        planName: "Standard Plan",
        features: [
          "<b>IT Strategy Development:</b> Comprehensive strategy planning and ongoing adjustments.",
          "<b>Technology Assessment:</b> Quarterly evaluations and recommendations.",
          "<b>Project Management:</b> Basic project oversight and support.",
          "<b>Support:</b> Extended support (9 AM - 9 PM).",
        ],
        price: "from <span>4300 EUR</span>",
      },
      {
        planName: "Premium Plan",
        features: [
          "<b>IT Strategy Development:</b> Full strategic planning with continuous improvements.",
          "<b>Technology Assessment:</b> Monthly evaluations and detailed reports.",
          "<b>Project Management:</b> Full project management services for multiple projects.",
          "<b>Vendor Management:</b> Assistance with vendor selection and management.",
          "<b>Risk Management:</b> Ongoing risk assessments and mitigation strategies.",
          "<b>Support:</b> 24/7 support with priority service.",
        ],
        price: "from <span>5000 EUR</span>",
      },
    ],
  },
  tech_support: {
    number: "06",
    title: "Tech Support",
    slug: "tech-support",
    excerpt: "Responsive support for all your technical issues.",
    advantages: [
      "Remote Assistance",
      "Configuration",
      "Maintenance",
      "Remote Assistance",
      "Configuration",
      "Maintenance",
    ],
    categoriesTitle: "Instant Tech Support Services",
    categories: [
      {
        number: "01",
        title: "Help Desk Support",
        description:
          "Immediate assistance for IT issues through phone, email, or chat.",
      },
      {
        number: "02",
        title: "On-Site Support",
        description:
          "Professional support for more complex issues that require on-site intervention.",
      },
      {
        number: "03",
        title: "Remote Support",
        description: "Quick resolution of IT problems via remote access.",
      },
      {
        number: "04",
        title: "System Setup and Configuration",
        description: "Installation and configuration of hardware and software.",
      },
      {
        number: "05",
        title: "Software Troubleshooting",
        description: "Identifying and resolving software-related issues.",
      },
      {
        number: "06",
        title: "Hardware Repair and Maintenance",
        description: "Fixing and maintaining physical IT equipment.",
      },
      {
        number: "07",
        title: "Network Support",
        description:
          "Managing and troubleshooting network issues to ensure connectivity.",
      },
      {
        number: "08",
        title: "User Training",
        description:
          "Educating staff on effectively using IT systems and tools.",
      },
    ],
    plans: [
      {
        planName: "Basic Plan",
        features: [
          "<b>Help Desk Support:</b> 9 AM - 5 PM, Monday to Friday.",
          "<b>Remote Support:</b> Up to 5 incidents per month.",
          "<b>System Setup and Configuration:</b> Basic setup for up to 5 devices.",
          "<b>Software Troubleshooting:</b> Support for up to 5 software issues per month.",
          "<b>Support:</b> Business hours support (9 AM - 5 PM).",
        ],
        price: "from <span>3500 EUR</span>",
      },
      {
        planName: "Standard Plan",
        features: [
          "<b>Help Desk Support:</b> 9 AM - 9 PM, Monday to Saturday.",
          "<b>Remote Support:</b> Up to 15 incidents per month.",
          "<b>On-Site Support:</b> 2 visits per month.",
          "<b>System Setup and Configuration:</b> Advanced setup for up to 10 devices.",
          "<b>Software Troubleshooting:</b> Support for up to 10 software issues per month.",
          "<b>Hardware Repair and Maintenance:</b> Basic maintenance for up to 10 devices.",
          "<b>Support:</b> Extended support (9 AM - 9 PM).",
        ],
        price: "from <span>4800 EUR</span>",
      },
      {
        planName: "Premium Plan",
        features: [
          "<b>Help Desk Support:</b> 24/7 availability.",
          "<b>Remote Support:</b> Unlimited incidents per month.",
          "<b>On-Site Support:</b> Unlimited visits per month.",
          "<b>System Setup and Configuration:</b> Comprehensive setup for unlimited devices.",
          "<b>Software Troubleshooting:</b> Unlimited software support.",
          "<b>Hardware Repair and Maintenance:</b> Full maintenance for all devices.",
          "<b>Network Support:</b> Comprehensive network management.",
          "<b>User Training:</b> Monthly training sessions for staff.",
          "<b>Support:</b> 24/7 support with priority service.",
        ],
        price: "from <span>6500 EUR</span>",
      },
    ],
  },
  digital_transformation: {
    number: "07",
    title: "Digital Transformation Services",
    slug: "digital-transformation",
    excerpt:
      "Consulting on modernising your business with the latest technology.",
    advantages: [
      "Integration ",
      "Analytics",
      "Management",
      "Integration ",
      "Analytics",
      "Management",
    ],
    categoriesTitle: "Instant Digital Transformation Services",
    categories: [
      {
        number: "01",
        title: "Business Process Reengineering",
        description:
          "Analysing and redesigning workflows for greater efficiency.",
      },
      {
        number: "02",
        title: "Technology Implementation",
        description:
          "Deploying cutting-edge technologies to transform your business operations.",
      },
      {
        number: "03",
        title: "Cloud Integration",
        description:
          "Migrating your business processes and data to the cloud for enhanced agility and scalability.",
      },
      {
        number: "04",
        title: "Data Analytics",
        description:
          "Leveraging big data and analytics to drive informed business decisions.",
      },
      {
        number: "05",
        title: "Customer Experience Enhancement",
        description:
          "Using digital tools to improve customer interactions and satisfaction.",
      },
      {
        number: "06",
        title: "Change Management",
        description:
          "Guiding your company through operational changes required for digital transformation.",
      },
      {
        number: "07",
        title: "Automation Solutions",
        description:
          "Implementing automation tools to streamline repetitive tasks and improve productivity.",
      },
      {
        number: "08",
        title: "Business Cybersecurity",
        description:
          "Ensuring robust security measures are in place to protect your digital assets.",
      },
    ],
    plans: [
      {
        planName: "Basic Plan",
        features: [
          "<b>Business Process Reengineering:</b> Initial analysis and recommendations.",
          "<b>Technology Implementation:</b> Basic setup and deployment.",
          "<b>Cloud Integration:</b> Migration of up to 5 business processes.",
          "<b>Support:</b> Business hours support (9 AM - 5 PM).",
        ],
        price: "from <span>6000 EUR</span>",
      },
      {
        planName: "Standard Plan",
        features: [
          "<b>Business Process Reengineering:</b> Comprehensive analysis and workflow redesign.",
          "<b>Technology Implementation:</b> Advanced deployment and integration.",
          "<b>Cloud Integration:</b> Migration of up to 15 business processes.",
          "<b>Data Analytics:</b> Basic analytics and reporting.",
          "<b>Customer Experience Enhancement:</b> Implementation of customer interaction tools.",
          "<b>Support:</b> Extended support (9 AM - 9 PM).",
        ],
        price: "from <span>7500 EUR</span>",
      },
      {
        planName: "Premium Plan",
        features: [
          "<b>Business Process Reengineering:</b> Full analysis and continuous improvement.",
          "<b>Technology Implementation:</b> Comprehensive deployment with ongoing support.",
          "<b>Cloud Integration:</b> Migration of unlimited business processes.",
          "<b>Data Analytics:</b> Advanced analytics with real-time reporting.",
          "<b>Customer Experience Enhancement:</b> Full suite of customer engagement tools.",
          "<b>Change Management:</b> Dedicated change management support.",
          "<b>Automation Solutions:</b> Implementation of advanced automation tools.",
          "<b>Business Cybersecurity:</b> Enhanced security measures and monitoring.",
          "<b>Support:</b> 24/7 support with priority service.",
        ],
        price: "from <span>9000 EUR</span>",
      },
    ],
  },
  mobile_remote_networking: {
    number: "08",
    title: "Mobile and Remote Networking",
    slug: "mobile-remote-networking",
    excerpt: "Solutions for seamless remote and mobile connectivity.",
    advantages: [
      "Tools",
      "Monitoring",
      "Management",
      "Tools",
      "Monitoring",
      "Management",
    ],
    categoriesTitle: "Instant Mobile and Remote Networking Services",
    categories: [
      {
        number: "01",
        title: "Remote Access Solutions",
        description:
          "Secure access to your business network from any location.",
      },
      {
        number: "02",
        title: "Mobile Device Management",
        description:
          "Managing and securing mobile devices used by your employees.",
      },
      {
        number: "03",
        title: "VPN Setup and Management",
        description:
          "Implementing and maintaining Virtual Private Networks for secure remote connections.",
      },
      {
        number: "04",
        title: "Cloud Networking",
        description:
          "Utilising cloud services to facilitate remote work and collaboration.",
      },
      {
        number: "05",
        title: "Network Security",
        description:
          "Protecting remote connections from cyber threats and unauthorized access.",
      },
      {
        number: "06",
        title: "Collaboration Tools",
        description:
          "Providing tools and platforms for remote teamwork and communication.",
      },
      {
        number: "07",
        title: "Performance Monitoring",
        description:
          "Monitoring and optimising the performance of your remote network.",
      },
      {
        number: "08",
        title: "Technical Support",
        description:
          "Offering support for remote and mobile networking issues.",
      },
    ],
    plans: [
      {
        planName: "Basic Plan",
        features: [
          "<b>Remote Access Solutions:</b> Setup for up to 10 users.",
          "<b>VPN Setup and Management:</b> Basic VPN implementation.",
          "<b>Support:</b> Business hours support (9 AM - 5 PM).",
        ],
        price: "from <span>3200 EUR</span>",
      },
      {
        planName: "Standard Plan",
        features: [
          "<b>Remote Access Solutions:</b> Setup for up to 50 users.",
          "<b>Mobile Device Management:</b> Basic management for up to 50 devices.",
          "<b>VPN Setup and Management:</b> Advanced VPN implementation and maintenance.",
          "<b>Cloud Networking:</b> Basic cloud services integration.",
          "<b>Network Security:</b> Basic security measures for remote connections.",
          "<b>Support:</b> Extended support (9 AM - 9 PM).",
        ],
        price: "from <span>4800 EUR</span>",
      },
      {
        planName: "Premium Plan",
        features: [
          "<b>Remote Access Solutions:</b> Setup for unlimited users.",
          "<b>Mobile Device Management:</b> Comprehensive management for all mobile devices.",
          "<b>VPN Setup and Management:</b> Full VPN services with continuous monitoring.",
          "<b>Cloud Networking:</b> Advanced cloud services integration.",
          "<b>Network Security:</b> Enhanced security protocols and monitoring.",
          "<b>Collaboration Tools:</b> Full suite of collaboration and communication tools.",
          "<b>Performance Monitoring:</b> Real-time monitoring and optimization.",
          "<b>Support:</b> 24/7 support with priority service.",
        ],
        price: "from <span>6500 EUR</span>",
      },
    ],
  },
};

export default services;
