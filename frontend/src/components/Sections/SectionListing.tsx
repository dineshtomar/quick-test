import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Tippy from "@tippyjs/react";
import { Trans } from "react-i18next";
import { useAppSelector } from "../../store/hooks";
interface Iprops {
  editPopUp: (section: any) => void;
  openDeleteModal: (section: any) => void;
}
const SectionListing = (props: Iprops) => {
  const sections = useAppSelector((state) => state.sections.sections);

  return (
    <div>
      {sections.length &&
        sections.map((section, i) => (
          <div
            key={i}
            className={`pb-2 pt-2 ${
              i !== sections.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <span className="inline-block mr-2 text-sm">{i + 1}.</span>
            <span className="inline-block mr-2 text-sm">
              <Trans>{section.name}</Trans>
            </span>
            {section.name !== "Unassigned" && (
              <span className="float-right">
                <Tippy content="Edit">
                  <PencilSquareIcon
                    onClick={() => props.editPopUp(section)}
                    className="text-indigo-500 h-6 w-4 cursor-pointer mr-3 inline-block pb-1"
                    data-cy={"section-" + i + "-edit"}
                  />
                </Tippy>
                <Tippy content="Delete">
                  <TrashIcon
                    onClick={() => props.openDeleteModal(section)}
                    className="text-red-400 h-6 w-4 cursor-pointer mr-3 inline-block pb-1"
                    data-cy={"section-" + i + "-delete"}
                  />
                </Tippy>
              </span>
            )}
          </div>
        ))}
    </div>
  );
};

export default SectionListing;
