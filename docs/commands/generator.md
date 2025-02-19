`klayr-core generator`
======================

Disable block generation for given validator address.

* [`klayr-core generator:disable ADDRESS`](#klayr-core-generatordisable-address)
* [`klayr-core generator:enable ADDRESS`](#klayr-core-generatorenable-address)
* [`klayr-core generator:export`](#klayr-core-generatorexport)
* [`klayr-core generator:import`](#klayr-core-generatorimport)
* [`klayr-core generator:status`](#klayr-core-generatorstatus)

## `klayr-core generator:disable ADDRESS`

Disable block generation for given validator address.

```
USAGE
  $ klayr-core generator:disable ADDRESS

ARGUMENTS
  ADDRESS  Address of an account in a klayr32 format.

OPTIONS
  -d, --data-path=data-path  Directory path to specify where node data is stored. Environment variable "KLAYR_DATA_PATH"
                             can also be used.

  -w, --password=password    Specifies a source for your secret password. Command will prompt you for input if this
                             option is not set.
                             Examples:
                             - --password=pass:password123 (should only be used where security is not important)

  --pretty                   Prints JSON in pretty format rather than condensed.

EXAMPLES
  generator:disable kly ycz7hvr8yfu74bcwxy2n4mopfmjancgdvxq8xz
  generator:disable kly ycz7hvr8yfu74bcwxy2n4mopfmjancgdvxq8xz --data-path ./data
  generator:disable kly ycz7hvr8yfu74bcwxy2n4mopfmjancgdvxq8xz --data-path ./data --password your_password
```

_See code: [dist/commands/generator/disable.ts](https://github.com/klayrhq/klayr-core/blob/v4.1.4/dist/commands/generator/disable.ts)_

## `klayr-core generator:enable ADDRESS`

Enable block generation for given validator address.

```
USAGE
  $ klayr-core generator:enable ADDRESS

ARGUMENTS
  ADDRESS  Address of an account in a klayr32 format.

OPTIONS
  -d, --data-path=data-path                    Directory path to specify where node data is stored. Environment variable
                                               "KLAYR_DATA_PATH" can also be used.

  -w, --password=password                      Specifies a source for your secret password. Command will prompt you for
                                               input if this option is not set.
                                               Examples:
                                               - --password=pass:password123 (should only be used where security is not
                                               important)

  --height=height                              Last generated block height.

  --max-height-generated=max-height-generated  Validator's largest previously generated height.

  --max-height-prevoted=max-height-prevoted    Validator's largest prevoted height for a block.

  --pretty                                     Prints JSON in pretty format rather than condensed.

  --use-status-value                           Use status value from the connected node

EXAMPLES
  generator:enable kly 24cd35u4jdq8szo3pnsqe5dsxwrnazyqqqg5eu --use-status-value
  generator:enable kly 24cd35u4jdq8szo3pnsqe5dsxwrnazyqqqg5eu --height=100 --max-height-generated=30 
  --max-height-prevoted=10
  generator:enable kly 24cd35u4jdq8szo3pnsqe5dsxwrnazyqqqg5eu --height=100 --max-height-generated=30 
  --max-height-prevoted=10 --data-path ./data
  generator:enable kly 24cd35u4jdq8szo3pnsqe5dsxwrnazyqqqg5eu --height=100 --max-height-generated=30 
  --max-height-prevoted=10 --data-path ./data --password your_password
```

_See code: [dist/commands/generator/enable.ts](https://github.com/klayrhq/klayr-core/blob/v4.1.4/dist/commands/generator/enable.ts)_

## `klayr-core generator:export`

Export to <FILE>.

```
USAGE
  $ klayr-core generator:export

OPTIONS
  -d, --data-path=data-path  Directory path to specify where node data is stored. Environment variable "KLAYR_DATA_PATH"
                             can also be used.

  -o, --output=output        The output directory. Default will set to current working directory.

  --pretty                   Prints JSON in pretty format rather than condensed.

EXAMPLES
  generator:export
  generator:export --output /mypath/generator_info.json
  generator:export --output /mypath/generator_info.json --data-path ./data
```

_See code: [dist/commands/generator/export.ts](https://github.com/klayrhq/klayr-core/blob/v4.1.4/dist/commands/generator/export.ts)_

## `klayr-core generator:import`

Import from <FILE>.

```
USAGE
  $ klayr-core generator:import

OPTIONS
  -d, --data-path=data-path  Directory path to specify where node data is stored. Environment variable "KLAYR_DATA_PATH"
                             can also be used.

  -f, --file-path=file-path  (required) Path of the file to import from

  --pretty                   Prints JSON in pretty format rather than condensed.

EXAMPLES
  generator:import --file-path ./my/path/genInfo.json
  generator:import --file-path ./my/path/genInfo.json --data-path ./data
```

_See code: [dist/commands/generator/import.ts](https://github.com/klayrhq/klayr-core/blob/v4.1.4/dist/commands/generator/import.ts)_

## `klayr-core generator:status`

Get forging information for the locally running node.

```
USAGE
  $ klayr-core generator:status

OPTIONS
  -d, --data-path=data-path  Directory path to specify where node data is stored. Environment variable "KLAYR_DATA_PATH"
                             can also be used.

  --pretty                   Prints JSON in pretty format rather than condensed.

EXAMPLES
  generator:status
  generator:status --data-path ./sample --pretty
```

_See code: [dist/commands/generator/status.ts](https://github.com/klayrhq/klayr-core/blob/v4.1.4/dist/commands/generator/status.ts)_
