import React from "react";

const Experience = () => {
  return (
    <div className="lg:pl-16  lg:pr-16 gap-3 mt-12 p-12 text-white">
      <h3 className="text-2xl font-bold">Experience</h3>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2">
      <div className="flex  gap-2 p-3 ">
        <img
          className="rounded-full h-28"
          src="data:image/png;base64,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"
        />
        <h6 className="mt-2">
          Atomcamp <br />
          Student
          <br />
          2024
        </h6>
      </div>
      <div className="flex gap-2 mt-2 p-3">
        <img
          className="rounded-full h-28"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///9fyfhax/gxufYHW50EWZwDWJxPxfjz+/4IXJ5hhrSi3ftVxvjd5e4AVJrX8P3n9v5HvveG0/nN7P0AT5jf8/140PkATJcARpTS7v245fvE6Py2xtro9v4tqucMs/UARJNOrOAIO4uW2fotu/au3/oGOYnC4PNSfK7v8/fVukePAAADUklEQVR4nO3c21LbMBSFYSuxJVJSUVqDTaEmoS1t3/8F6wNxEluytzvTyd6b9Q+XXPibJaIhHJIEIYQQQgghhBBCCCGEEEIIIYQQQggp6eZ6Qd+vLv24y3twW2rOuZtLP+7yHpwJtQqmCBgWagIGhaqAIaFE4E0UGBAqA46F2oAjoTrgUKgPaOQD46+iAaFGoFEPNOqBRj3QqAca9UCjHmgAZBsRaNQDjXqgUQ806oEGQI4BCCDzvgAIIO8ABJB5AALIPADfE9C4u0s/7vKWAdUvqB6II8ovLAgg8wAEkHkAAsg8AAFkHoAAMg9AAJkHIIDMAxDAuqtFCQTeO3q395yBnyLA7egv8aK5zwAC+L+AK4nAO+3AJPlK/7V0mUA6USyQShQMpBFFAylE4cB5onjgHFEBcJqoAjhFVAKME9UAY8SV+xb+dHnAMDG64K2L/BMoxsAQMQ5cr7dUIh/gmBg9ojWQTOQEHBKnFiQTeQHPiXNAEpEb8JQ4fUSJRH7AI3F+wZYoD3gg0oAzRJ7Ajkg5ol1OHrAhUhecJPIFNkQ6MErkDEySyA9OgsAIkTcwUgQYJOoCBojagCOiPuCAKBK4mgaeEUUC72cmPCXKBG7nhQeiUKAhCDuiUOBqRRE2RLFAmnDtRAJN+w0STbiWCEweHV1Y+Y+Xftx/qSWShFWW5WKJFGGVpRu5RIKwsulmI5c4L+yAcok/qECxxJ/PM0CfHYRSideTxMrb7EBMU6uP2ADfiGmTOmKVe9sSsw6YpsoOag30B2KqkVgV3rdEq5RYlXneEX1r7ImFEmIDjBBlrji8F6uyyHui9z2vfUWVueI5sdoVnbA1nvnqr0mhxMfj+4Zm/1IUb0Rv03QArIkyD2pPrIFl0Zb7/iY88Ylf0exfy7KoP4a8I1A2sVmw5uXZZug7AUo+qO2CuR3zznySV9y/BnkjoFjir5c0xBv75BKfdjSg4HvxqSQNKHrFctYn/V48J0YHVEKc2E8FMbSaknvxqczmzqcCImXABmh1EUNAscQdYcAOKJY4v6LtU0q0VjyxP6gTB9R2b6hKJZY25hsABRMjvhEwy7xQ4s6Ty3cyiR8W9PvPpR8XIYQQQgghhBBCCCGEEEIIIYQQQui99xd9MndVczNj5wAAAABJRU5ErkJggg=="
        />
        <h6 className="mt-2">
          Flutter <br />
          Student
          <br />
          2023
        </h6>
      </div>
      <div className="flex gap-2 p-3">
        <img
          className="rounded-full h-28"
          src="data:image/png;base64,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"
        />
        <h6 className="mt-2">
          Atomcamp <br />
          Student
          <br />
          2024
        </h6>
      </div>
      <div className="flex gap-2 mt-2 p-3">
        <img
          className="rounded-full h-28"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///9fyfhax/gxufYHW50EWZwDWJxPxfjz+/4IXJ5hhrSi3ftVxvjd5e4AVJrX8P3n9v5HvveG0/nN7P0AT5jf8/140PkATJcARpTS7v245fvE6Py2xtro9v4tqucMs/UARJNOrOAIO4uW2fotu/au3/oGOYnC4PNSfK7v8/fVukePAAADUklEQVR4nO3c21LbMBSFYSuxJVJSUVqDTaEmoS1t3/8F6wNxEluytzvTyd6b9Q+XXPibJaIhHJIEIYQQQgghhBBCCCGEEEIIIYQQQggp6eZ6Qd+vLv24y3twW2rOuZtLP+7yHpwJtQqmCBgWagIGhaqAIaFE4E0UGBAqA46F2oAjoTrgUKgPaOQD46+iAaFGoFEPNOqBRj3QqAca9UCjHmgAZBsRaNQDjXqgUQ806oEGQI4BCCDzvgAIIO8ABJB5AALIPADfE9C4u0s/7vKWAdUvqB6II8ovLAgg8wAEkHkAAsg8AAFkHoAAMg9AAJkHIIDMAxDAuqtFCQTeO3q395yBnyLA7egv8aK5zwAC+L+AK4nAO+3AJPlK/7V0mUA6USyQShQMpBFFAylE4cB5onjgHFEBcJqoAjhFVAKME9UAY8SV+xb+dHnAMDG64K2L/BMoxsAQMQ5cr7dUIh/gmBg9ojWQTOQEHBKnFiQTeQHPiXNAEpEb8JQ4fUSJRH7AI3F+wZYoD3gg0oAzRJ7Ajkg5ol1OHrAhUhecJPIFNkQ6MErkDEySyA9OgsAIkTcwUgQYJOoCBojagCOiPuCAKBK4mgaeEUUC72cmPCXKBG7nhQeiUKAhCDuiUOBqRRE2RLFAmnDtRAJN+w0STbiWCEweHV1Y+Y+Xftx/qSWShFWW5WKJFGGVpRu5RIKwsulmI5c4L+yAcok/qECxxJ/PM0CfHYRSideTxMrb7EBMU6uP2ADfiGmTOmKVe9sSsw6YpsoOag30B2KqkVgV3rdEq5RYlXneEX1r7ImFEmIDjBBlrji8F6uyyHui9z2vfUWVueI5sdoVnbA1nvnqr0mhxMfj+4Zm/1IUb0Rv03QArIkyD2pPrIFl0Zb7/iY88Ylf0exfy7KoP4a8I1A2sVmw5uXZZug7AUo+qO2CuR3zznySV9y/BnkjoFjir5c0xBv75BKfdjSg4HvxqSQNKHrFctYn/V48J0YHVEKc2E8FMbSaknvxqczmzqcCImXABmh1EUNAscQdYcAOKJY4v6LtU0q0VjyxP6gTB9R2b6hKJZY25hsABRMjvhEwy7xQ4s6Ty3cyiR8W9PvPpR8XIYQQQgghhBBCCCGEEEIIIYQQQui99xd9MndVczNj5wAAAABJRU5ErkJggg=="
        />
        <h6 className="mt-2">
          Flutter <br />
          Student
          <br />
          2023
        </h6>
      </div>
      </div>
      <div className="text-center mt-12 ">
        <h3 className='text-xl font-semibold'>Let us create awesome products!</h3>
        <p className=" mt-2 mb-7">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
      </div>
    </div>
  );
};

export default Experience;
