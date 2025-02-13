export type ProductSkeletonStyles = {
  container: string;
  imagePlaceholder: string;
  content: {
    wrapper: string;
    title: string;
    description: {
      container: string;
      line1: string;
      line2: string;
    };
    specifications: {
      container: string;
      line: string;
    };
    footer: {
      container: string;
      supplier: {
        container: string;
        logo: string;
        name: string;
      };
      download: string;
    };
  };
  grid: string;
};

export type ProductFilterStyles = {
  container: string;
  searchBar: {
    wrapper: string;
    input: string;
    button: string;
  };
  panel: {
    wrapper: string;
    header: {
      wrapper: string;
      title: string;
      resetButton: string;
    };
  };
  section: {
    wrapper: string;
    title: string;
    grid: string;
  };
  category: {
    base: string;
    active: string;
    inactive: string;
  };
  activeTags: {
    wrapper: string;
    tag: string;
    closeButton: string;
    closeIcon: string;
  };
};

export type ProductCardStyles = {
  container: {
    base: string;
    hover: string;
  };
  image: {
    wrapper: string;
    img: string;
  };
  content: {
    wrapper: string;
    title: string;
    description: string;
    supplier: string;
  };
  footer: {
    wrapper: string;
    button: {
      base: string;
      primary: string;
      outline: string;
    };
  };
  badge: {
    wrapper: string;
    base: string;
    new: string;
    popular: string;
  };
};

export type ProductDetailsStyles = {
  container: string;
  grid: string;
  imageContainer: string;
  image: string;
  content: {
    title: string;
    description: string;
  };
  specifications: {
    container: string;
    title: string;
    grid: string;
    label: string;
    value: string;
  };
  features: {
    title: string;
    list: string;
    item: string;
  };
}; 