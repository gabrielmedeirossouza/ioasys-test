import { ReactEventHandler } from "react";
import { Trans, useTranslation } from "react-i18next";

import arrowLeftIco from "@/assets/ico/arrow-left.svg";
import arrowLeftStrongIco from "@/assets/ico/arrow-left-strong.svg";
import arrowRightIco from "@/assets/ico/arrow-right.svg";
import arrowRightStrongIco from "@/assets/ico/arrow-right-strong.svg";

import { Button } from "@/components/global";
import { Container } from "./styles";

interface IPaginatorProps {
  currentPage: number;
  totalPages: number;
  handlePrevPage: ReactEventHandler;
  handleNextPage: ReactEventHandler;
}

export const Paginator = ({ currentPage, totalPages, handlePrevPage, handleNextPage }: IPaginatorProps) => {
  const { t } = useTranslation();

  const mayPrevPage = !(currentPage <= 1);
  const mayNextPage = !(currentPage >= totalPages);

  if (totalPages < 2) {
    return <></>;
  }

  return (
    <Container>
      <span>
        <Trans i18nKey="global.paginator" t={t}>
          <strong>
            {{ currentPage }}
            {{ totalPages }}
          </strong>
        </Trans>
      </span>

      <Button
        onClick={mayPrevPage ? handlePrevPage : undefined}
        icon={mayPrevPage ? arrowLeftStrongIco : arrowLeftIco}
        alt="Previous"
        disabled={!mayPrevPage}
      />
      <Button
        onClick={mayNextPage ? handleNextPage : undefined}
        icon={mayNextPage ? arrowRightStrongIco : arrowRightIco}
        alt="Next"
        disabled={!mayNextPage}
      />
    </Container>
  );
};
