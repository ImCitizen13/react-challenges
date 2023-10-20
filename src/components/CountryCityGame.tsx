import { useEffect, useState } from "react";

type ButtonState = "DEFAULT" | "SELECTED" | "WRONG" | "CORRECT" | "HIDDEN";
type Option = {
  value: string;
  state: ButtonState;
  answer: string;
};
export default function CountryCityGame({
  data,
}: {
  data: Record<string, string>;
}) {

  const getOptions = (_countries: string[], _capitals: string[]) => {
    const tempOptions: Option[] = [];
    _countries.forEach((country, index) => {
      tempOptions.push({
        value: country,
        state: "DEFAULT",
        answer: _capitals[index] ?? "",
      });
      tempOptions.push({
        value: _capitals[index] ?? "",
        state: "DEFAULT",
        answer: country ?? "",
      });
    });
    tempOptions.sort(() => Math.random() - 0.5);
    return tempOptions
  }

  const setbgColors = (state: ButtonState): string => {
    if (state === "SELECTED") return "bg-[#009bff]";
    if (state === "WRONG") return "bg-red-500";
    if (state === "CORRECT") return "bg-green-300";
    return "bg-black";
  };
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const [options, setOptions] = useState<Option[]>(getOptions(countries, capitals));
  const [selected, setSelected] = useState<Option>();
  const [hidden, sethidden] = useState<boolean>(true);

useEffect(()=> {
    if(options.length === 0){
        sethidden(false)
    }
}, [options.length])

  return (
    <div className="flex flex-wrap gap-4">
      {options.map((option) => {
        return (
          <button
            key={option.value}
            className={`${setbgColors(
              option.state,
            )} min-h-[50px] min-w-[150px] text-3xl`}
            onClick={() => {
              if (!selected) {
                setSelected(option);
                setOptions(
                  options.map((opt) => {
                    if (opt === option) {
                      return {
                        ...opt,
                        state: "SELECTED",
                      };
                    } else if (opt.state === "WRONG")
                      return { ...opt, state: "DEFAULT" };
                    return opt;
                  }),
                );
              } else {
                if (selected.answer === option.value) {
                  //Correct: remove both buttons
                  setOptions(
                    options.filter(
                      (opt: Option) =>
                        ![selected.value, option.value].includes(opt.value),
                    ),
                  );
                } else {
                  //False: Make both buttons as red
                  setOptions(
                    options.map((opt) => {
                      return opt === option || opt.value == selected.value
                        ? {
                            ...opt,
                            state: "WRONG",
                          }
                        : opt;
                    }),
                  );
                }
                setSelected(undefined);
              }
            }}
            suppressHydrationWarning={true}
          >
            {option.value}
          </button>
        );
      })}
      <h1 className={`text-9xl ${hidden? "hidden" : ""}`}>Congratulations!!!</h1>
    </div>
  );
}
