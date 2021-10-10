interface IIconProps {
  icon: string;
  alt?: string;
}

export const Icon = ({ icon, alt }: IIconProps) => (
  <img src={icon} alt={alt} width="32" height="32" />
);
