export interface HomeProps {
  object: {
    slog: string;
    title: string;
    metadata: {
      banner: {
        url: string
      }
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
          imgix_url: string;
        }
      };
      services: ServiceProps[];
      contact: {
        email: string;
        phone: string;
        address: string;
        time: string;
      }
    }
  }
}

interface ServiceProps {
  image: {
    url: string;
  };
  description: string;
}