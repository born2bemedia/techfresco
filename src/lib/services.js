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
};

export default services;
